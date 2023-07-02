"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const searchparams = useSearchParams();
  const [isPorter, setPorter] = useState<boolean>(false);
  useEffect(() => {
    const search = searchparams.get("porter");
    if (search == "true") {
      setPorter(true);
    } else {
      setPorter(false);
    }
  }, []);
  const porterAction = () => {
    location.href = "/login?porter=" + (isPorter ? "false" : "true");
  };
  
  return (
    <div className={styles.register}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2>Login</h2>
          <h4>
            {
              isPorter ? "Login as porter":"Login to your student portal"
            }
            
          </h4>
        </div>
        <div className={styles.formGroup}>
          Are you a {isPorter ? "student" : "porter"}? &#160;{" "}
          <span onClick={porterAction}>
            login as {isPorter ? "student" : "porter"}
          </span>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div><input placeholder="Matric number" type="text" name="" id="" /></div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div><input placeholder="Password" type="password" name="" id="" /></div>
        </div>
        <div className={styles.formGroup}> <button type="submit">Login</button></div>
        <div className={styles.formGroup}>
          {`Don't`} have an account? &#160;  <Link href={`/register?porter=false`}><span>Register</span></Link>
        </div>
      </form>
    </div>
  );
};

export default Login;