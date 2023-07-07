import SignupPage from "./SignupPage";
async function getData() {
  const url: string =
  "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/hostels";
  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data') 
  }
 
  return res.json()
}

const Register = async () => {
  const data = await getData()
  return (
    <>
    <SignupPage hostels={data.data} />
    </>
  );
};

export default Register;
