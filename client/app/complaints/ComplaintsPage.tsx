"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../components/index.module.css";
import { catIcons } from "@/Helpers/Types";
import { useState } from "react";

const ComplaintsPage = ({ comps }: any) => {
  const title = (): { title: string }[] => {
    const arr = comps;
    return arr.map((x: { title: string }) => {
      const obj = {
        title: x.title,
      };
      return obj;
    });
  };

  const compList = (): { title: string; time: string; detail: string }[] => {
    const data = comps.map(
      (x: {
        title: string;
        student_first_name: string;
        student_last_name: string;
        time: string;
        description: string;
        date_filed: string;
      }) => {
        const xx = {
          title: x.title,
          name: `${x.student_first_name} ${x.student_last_name}`,
          time: x.date_filed,
          detail: x.description,
        };
        return xx;
      }
    );
    return data;
  };
  const [active, setActive] = useState(compList()[0].title);
  const [displayData, setDisplayData] = useState<
    { title: string; detail: string; time: string }[]
  >(compList());
  const handleFilter = (category: string) => {
    // if (category === active) return;
    setActive(category);
    setDisplayData([]);

    // if (category === "all") {
    //   setDisplayData(data);
    //   return;

    const filteredData = compList().filter((item) => item.title === category);

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 300);
  };

  console.log(compList());
  console.log("comps", comps);
  return (
    <div className={styles.main}>
      <div className={styles.lodge}>
        <div>
          <div>
            <button>Complaints for {comps[0].hostel} </button>
          </div>
          <div>
            <b>Categories</b>
            <ul className={styles.collapse}>
              {title().map((x, i) => (
                <li key={i} onClick={() => handleFilter(x.title)}>
                  <i
                    className={
                      catIcons.find((xx) => xx.title === x.title)?.icon
                    }
                  ></i>{" "}
                  <span>{x.title}</span>
                </li>
              ))}
              {/* <li>
                <i className="fa-solid fa-droplet"></i> <span>Water</span>
              </li>
              <li>
                <i className="fa-solid fa-person-through-window"></i>{" "}
                <span>Theft</span>
              </li>
              <li>
                <i className="fa-solid fa-lightbulb"></i> <span>No Light</span>
              </li>
              <li>
                <i className="fa-solid fa-bug"></i> <span>Bed bug</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-info"></i> <span>Others</span>
              </li> */}
            </ul>
          </div>
          <div></div>
        </div>
        <div style={{ overflow: "scroll" }}>
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date filed</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((x, i) => (
                <tr key={i}>
                  <td>{x.title}</td>
                  <td>{x.detail}</td>
                  <td>{x.time}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
