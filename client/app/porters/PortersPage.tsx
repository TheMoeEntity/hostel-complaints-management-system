"use client";
import { porterType } from "@/Helpers/Types";
import styles from "../../components/index.module.css";
import PorterCard from "./PorterCard";

const PortersPage = ({ porters }: any) => {
  return (
    <div className={styles.main}>
      {/* <div className={styles.search}>
          <div><input type="search" placeholder="Search here..."/></div>
          <div><button>Porters list</button></div>
      </div> */}
      <h2 style={{ textAlign: "center" }}>List of Porters in hostel</h2> <br />
      <div className={styles.porterCard}>
        {porters.map((x: porterType, i: number) => (
          <PorterCard
            first={x.porter_details.first_name}
            last={x.porter_details.last_name}
            email={x.porter_details.email}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default PortersPage;
