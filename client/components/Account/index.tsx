"use client";
import styles from "../index.module.css";
import Image from "next/image";
import count1 from "../../public/images/avatar.png";
import count2 from "../../public/images/avatar-stud.webp";
import { useSession } from "next-auth/react";
type detailType = {
  email?: string;
  first_name?: string;
  last_name?: string;
  hostel?: string;
  matric_number: string;
  all_complaints: string;
  resolved_complaints: string;
  unresolved_complaints: string;
};
const Account = (details: any | undefined) => {
  const { data: session } = useSession();


  const isporter = (): detailType => {
    return session?.user.is_student
      ? details?.details.students_details
      : details?.details.porter_details;
  };

  return (
    <div className={styles.main}>
      <div className={styles.editProfile}>
        <div className={styles.firstDiv}>
          <div
            style={{ position: "relative", width: "120px", height: "120px" }}
          >
            <Image
              src={session?.user.is_porter ? count1 : count2 ?? count1}
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
              {(isporter().first_name as string) + " " + isporter().last_name}
            </span>
            <span>{isporter().email}</span>
            <span>{isporter().matric_number}</span>
            <strong>{session?.user.hostel}</strong>
          </div>
          <ul>
            <li>
              <span>Complaints</span>
              <span>{isporter().all_complaints}</span>
            </li>
            <li>
              <span>Complaints (resolved)</span>
              <span>{isporter().resolved_complaints}</span>
            </li>
            <li>
              <span>Complaints (unresolved)</span>
              <span>{isporter().unresolved_complaints}</span>
            </li>
            <li>
              <span>Block</span>
              <span>{details?.details.block_no}</span>
            </li>
            <li>
              <span>Room number</span>
              <span>{details?.details.room_no}</span>
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
                  defaultValue={isporter().first_name}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Last Name</label>
                <input
                  defaultValue={isporter().last_name}
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
                  defaultValue={isporter().email}
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
                  defaultValue={isporter().matric_number}
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
                  defaultValue={details?.details.department}
                  type="tel"
                  name=""
                  id=""
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Faculty: </label>
                <input
                  defaultValue={details?.details.faculty}
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
