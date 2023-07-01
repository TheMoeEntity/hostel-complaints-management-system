"use client";
import Link from "next/link";
import { FormEvent } from "react";
import styles from "../page.module.css";

const Register = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.register}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2>Register</h2>
          <h4>Create an account with us</h4>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div><input placeholder="Username" type="text" name="" id="" /></div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div><input placeholder="Email" type="email" name="" id="" /></div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div><input placeholder="Password" type="password" name="" id="" /></div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-key"></i>
          </div>
          <div><input placeholder="Matric number" type="number" name="" id="" /></div>
        </div>
        <div className={styles.formGroup}> <button type="submit">Register</button></div>
        <div className={styles.formGroup}>
          Already have an account? &#160; <Link href={`/login`}><span>Login</span></Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
