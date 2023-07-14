"use client";
import Image from "next/image";
import man from "../../../public/images/avatar-stud.webp";
import styles from "../../../components/index.module.css";
import { Helpers } from "@/Helpers/Types";

const DetailsPage = ({ detail }: any) => {
  console.log(detail);
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
                <i className="fa-solid fa-droplet"></i> <span>Plumbing</span>
              </li>
              <li>
                <i className="fa-solid fa-person-through-window"></i>{" "}
                <span>Theft</span>
              </li>
              <li>
                <i className="fa-solid fa-lightbulb"></i>{" "}
                <span>Electricity</span>
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
        <div style={{ padding: "20px 10px" }}>
          <div className={styles.compHeader}>
            <div className={styles.image}>
              <div
                style={{ width: "80px", height: "80px", position: "relative" }}
              >
                <Image
                  src={man}
                  alt="user image"
                  layout="fill"
                  quality={100}
                  priority={true}
                  style={{ borderRadius: "50%" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.name}>
                <span>
                  <b
                    style={{
                      fontSize: "19px",
                      color: detail === "error" ? "red" : "black",
                    }}
                  >
                    {detail === "error"
                      ? "Error"
                      : detail.student_first_name +
                        " " +
                        detail.student_last_name}
                  </b>
                </span>
                <span>
                  {Helpers.firstTen(
                    detail.date_filed,
                    detail.date_filed.indexOf("-"),
                    0
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.compTitle}>
            <div>
              <h3>{detail.title}</h3>
            </div>
            <div>
              {detail.date_filed.substring(
                detail.date_filed.indexOf("- ") + 1,
                detail.date_filed.length
              )}
            </div>
          </div>
          <p className={styles.comp}>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
