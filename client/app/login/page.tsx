"use client";
import Link from "next/link";
import { FormEvent } from "react";
import styles from "../page.module.css";

const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.register}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2>Login</h2>
          <h4>Login to your portal</h4>
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
        <div className={styles.formGroup}> <button type="submit">Login</button></div>
        <div className={styles.formGroup}>
          Don't have an account? &#160;  <Link href={`/register`}><span>Register</span></Link>
        </div>
      </form>
    </div>
  );
};

export default Login;