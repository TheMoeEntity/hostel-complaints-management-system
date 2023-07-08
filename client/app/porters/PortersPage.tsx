"use client";
import styles from "../../components/index.module.css";
import PorterCard from "./PorterCard";

const PortersPage = () => {
  // const styless = {
  //   marginLeft: "20%",
  //   marginTop: "80px",
  //   width: "80%",
  //   height: "auto",
  //   transition: "0.5s",
  //   padding: "10px 0px",
  //   overflowX: "auto",
  //   minWidth:
  // }
  return (
    <div className={styles.main}>
      {/* <div className={styles.search}>
          <div><input type="search" placeholder="Search here..."/></div>
          <div><button>Porters list</button></div>
      </div> */}
      <h2 style={{textAlign:'center'}}>List of Porters in hostel</h2> <br />
        <div className={styles.porterCard}>
            {
                [...Array(8)].map((_x,i)=> (
                    <PorterCard key={i} />
                ))
            }
        </div>
    </div>
  );
};

export default PortersPage;
