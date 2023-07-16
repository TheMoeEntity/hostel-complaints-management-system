import { Helpers } from "@/Helpers/Types";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "../../page.module.css";
import DetailsPage from "./DetailsPage";

const Details = async ({ params }: any) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  let detail: any;
  if (user) {
    detail =
      (await Helpers.fetchData(
        "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/" +
          params.id
      )) || undefined;

    if (detail === undefined) {
      redirect("/dashboard?notFound=true");
    }
  }

  return (
    <main className={styles.main}>
      <DetailsPage detail={detail.data ?? "error"} />
    </main>
  );
};

export default Details;
