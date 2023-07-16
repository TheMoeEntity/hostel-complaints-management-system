import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignupPage from "./SignupPage";
async function getData() {
  const url: string =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/hostels";
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Register = async () => {
  const data = await getData();
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (user) {
    redirect("/dashboard");
  }
  return (
    <>
      <SignupPage hostels={data.data} />
    </>
  );
};

export default Register;
