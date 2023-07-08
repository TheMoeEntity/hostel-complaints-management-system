import { Helpers } from "@/Helpers/Types";
import styles from "../page.module.css";
import PortersPage from "./PortersPage";

const Porters = async() => {
  const porters = await Helpers.fetchData("https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/porters/")
  return (
    <main className={styles.main}>
      <PortersPage porters={porters.data} />
    </main>
  );
};

export default Porters;
