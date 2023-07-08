"use client";
import { studType } from "@/Helpers/Types";

import styles from "../../components/index.module.css";

const StudentsPage = ({ students }: any) => {
  
  return (
    <div style={{ overflowX: "auto" }} className={styles.main}>
      {/* <div className={styles.search}>
        <div>
          <input type="search" placeholder="Search here..." />
        </div>
        <div>
          <button>Students list</button>
        </div>
      </div> */}
      <h2>List of Students in hostel</h2> <br />
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Matric num</th>
            <th>Department</th>
            <th>Room num</th>
            <th>Block num</th>
          </tr>
        </thead>
        <tbody>
          {students.map((x:studType, i: number) => (
            <tr key={i as number}>
              <td>{x.students_details.first_name+" "+x.students_details.last_name}</td>
              <td>{x.students_details.matric_number}</td>
              <td>{x.department ?? "N/A"}</td>
              <td>{x.block_no ?? 'N/A'}</td>
              <td>{x.room_no ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
