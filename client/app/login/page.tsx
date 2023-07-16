import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginPage from "./LoginPage";

const Login = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (user) {
    redirect("/dashboard");
  }
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
