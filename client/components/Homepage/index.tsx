"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";

const HomePage = () => {
  const router = useRouter();
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
        <div className={styles.formGroup}>
          <button
            onClick={() => router.push(`/login?porter=false`)}
            style={{ borderRadius: "3px" }}
            type="button"
          >
            Login to your student portal
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
