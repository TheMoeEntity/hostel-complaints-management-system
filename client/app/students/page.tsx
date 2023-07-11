import { Helpers } from "@/Helpers/Types";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "../page.module.css";
import StudentsPage from "./StudentsPage";

const Students = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  const students = await Helpers.fetchData(
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/students/"
  );

  return (
    <main className={styles.main}>
      <StudentsPage students={students.data} />
    </main>
  );
};

export default Students;
