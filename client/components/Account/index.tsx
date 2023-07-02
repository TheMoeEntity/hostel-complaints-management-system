"use client";
import styles from "../index.module.css";
import Image from "next/image";
import count1 from "../../public/images/user.jpeg";

const Account = () => {
  return (
    <div className={styles.main}>
      <div className={styles.editProfile}>
        <div>
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
            <span>Moses Nwigberi</span>
            <strong>BIOBAKU HALL</strong>
          </div>
          <ul>
            <li>
              <span>Complaints</span>
              <span>43</span>
            </li>
            <li>
              <span>Messages</span>
              <span>10</span>
            </li>
            <li>
              <span>Responses</span>
              <span>4</span>
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
                <input defaultValue={'Moses'} type="text" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Last Name</label>
                <input defaultValue={'Nwigberi'} type="text" name="" id="" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">Email Address</label>
                <input defaultValue={'mosesnwigberi@gmail.com'} type="email" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Hostel</label>
                <input defaultValue={'BIOBAKU HALL'} type="text" name="" id="" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">Residential Address:</label>
                <input type="tel" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Surname</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="">Department:</label>
                <input defaultValue={'Chemical Engineering'} type="tel" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Faculty: </label>
                <input defaultValue={'Engineering'} type="text" name="" id="" />
              </div>
            </div>
          </form>
          <div style={{borderTop:'0.09px solid #30397329'}} className={styles.setupHeader}>
            <button>UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
