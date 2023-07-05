"use client";
import styles from "../../components/index.module.css";

const StudentsPage = () => {
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
      <div className={styles.search}>
          <div><input type="search" placeholder="Search here..."/></div>
          <div><button>Students list</button></div>
      </div>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Matric num</th>
            <th>Department</th>
            <th>Room #</th>
            <th>Block #</th>
          </tr>
        </thead>
        <tbody>

        
        <tr>
          <td>Kerry Wanker</td>
          <td>180401004</td>
          <td>Chemical Engineering</td>
          <td>B210</td>
          <td>Block Rosary</td>
        </tr>
        <tr>
          <td>Nigeria</td>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Nigeria</td>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          <td>Nigeria</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
          <td>Nigeria</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
          <td>Nigeria</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Nigeria</td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
          <td>Christina Berglund</td>
          <td>Nigeria</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
          <td>Nigeria</td>
          <td>UK</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
          <td>France</td>
          <td>Christina Berglund</td>
          <td>Nigeria</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
