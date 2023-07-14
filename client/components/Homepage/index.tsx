"use client";
import Link from "next/link";
import styles from "../../app/page.module.css";

const HomePage = () => {
  return (
    <div className={styles.register}>
      <form action="">
        <div className={styles.header}>
          <h2>Crawford University Hostel Management</h2>
          <h4 style={{ paddingBottom: "8px" }}></h4>
        </div>
        <h3 className={styles.welcome}>
          Welcome to Crawford University Hostel Complaints Management
        </h3>
        {/* <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div>
            <input

              ref={passRef}
              placeholder="Password"
              type="password"
              name=""
              id=""
            />
          </div>
        </div> */}
        <div className={styles.formGroup}>
          <button style={{ borderRadius: "3px" }} type="button">
            <Link href={`/login?porter=false`}>
              Login to your student portal
            </Link>
          </button>
        </div>
        <div className={styles.formGroup}>
          {`Don't`} have an account? &#160;{" "}
          <Link href={`/register?porter=false`}>
            <span>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
