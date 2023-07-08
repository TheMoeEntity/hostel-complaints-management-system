"use client";
import styles from "../index.module.css";
import Image from "next/image";
import count1 from "../../public/images/user.jpeg";
import { useSession } from "next-auth/react";

const Account = (details: any) => {
  const { data: session } = useSession();
  console.log(details.details);

  return (
    <div className={styles.main}>
      <div className={styles.editProfile}>
        <div className={styles.firstDiv}>
          <div
            style={{ position: "relative", width: "120px", height: "120px" }}
          >
            <Image
              src={count1}
              alt="user image"
              layout="fill"
              quality={100}
              priority={true}
              style={{ borderRadius: "50%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <span>
              {(details.details.students_details.first_name as string) +
                " " +
                details.details.students_details.last_name}
            </span>
            <span>{details.details.students_details.email}</span>
            <span>{details.details.students_details.matric_number}</span>
            <strong>{session?.user.hostel}</strong>
          </div>
          <ul>
            <li>
              <span>Complaints</span>
              <span>{details.details.students_details.all_complaints}</span>
            </li>
            <li>
              <span>Complaints (resolved)</span>
              <span>
                {details.details.students_details.resolved_complaints}
              </span>
            </li>
            <li>
              <span>Complaints (unresolved)</span>
              <span>
                {details.details.students_details.unresolved_complaint}
              </span>
            </li>
            <li>
              <span>Block</span>
              <span>{details.details.block_no}</span>
            </li>
            <li>
              <span>Room number</span>
              <span>{details.details.room_no}</span>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.setupHeader}>
            <h3>setup profile</h3>
          </div>
          <form action="">
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">First Name</label>
                <input
                  defaultValue={details.details.students_details.first_name}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Last Name</label>
                <input
                  defaultValue={details.details.students_details.last_name}
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">Email Address</label>
                <input
                  defaultValue={details.details.students_details.email}
                  type="email"
                  name=""
                  id=""
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Hostel</label>
                <input
                  defaultValue={session?.user.hostel}
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">Residential Address:</label>
                <input type="tel" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Matric number</label>
                <input
                  defaultValue={details.details.students_details.matric_number}
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">Department:</label>
                <input
                  defaultValue={details.details.department}
                  type="tel"
                  name=""
                  id=""
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Faculty: </label>
                <input
                  defaultValue={details.details.faculty}
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </form>
          <div
            style={{ borderTop: "0.09px solid #30397329" }}
            className={styles.setupHeader}
          >
            <button>UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
