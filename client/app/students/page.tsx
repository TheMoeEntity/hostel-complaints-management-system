import { Helpers } from "@/Helpers/Types";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "../page.module.css";
import StudentsPage from "./StudentsPage";

const Students = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  let students: any;
  if (!user) {
    redirect("/login");
  }
  if (user) {
    students = await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/students/"
    );
  }
  if (user && user.is_student === true) {
    redirect("/dashboard?student=true");
  }
  return (
    <main className={styles.main}>
      <StudentsPage students={students.data} />
    </main>
  );
};

export default Students;
