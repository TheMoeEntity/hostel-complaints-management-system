"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../components/index.module.css";
// enum categories {
//   light_issues:''
// }
const ComplaintsPage = ({ comps }: any) => {
  const router = useRouter();
  const linkAction = (to: string) => {
    router.push("/" + to);
  };
  console.log("comps", comps);
  return (
    <div className={styles.main}>
      <div className={styles.lodge}>
        <div>
          <div>
            <button>Complaints for Biobaku </button>
          </div>
          <div>
            <b>Categories</b>
            <ul className={styles.collapse}>
              <li>
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
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div style={{ overflow: "scroll" }}>
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Details</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kerry Wanker</td>
                <td>
                  <Link href={`/details`}>
                    <div>The main issue is that whenever we say...</div>
                  </Link>
                </td>
                <td>11:30AM </td>
              </tr>
              <tr>
                <td>Nigeria</td>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
              </tr>
              <tr>
                <td>Nigeria</td>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Königlich Essen</td>
                <td>Philip Cramer</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Nigeria</td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>Nigeria</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
