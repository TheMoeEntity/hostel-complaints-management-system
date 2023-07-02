"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";
import { Helpers, options } from "@/Helpers/Types";

const Register = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url: string =
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/hostels";
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();

    // const response = await fetch(url).then((response) => response.json());
    console.log(year, month, day);
  };
  const [selectedOption, setSelectedOption] = useState<String>();
  const AllOptions: string[] = options;
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
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
    location.href = "/register?porter=" + (isPorter ? "false" : "true");
  };
  return (
    <div className={styles.register}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2>Register</h2>
          <h4>Create a {isPorter ? "porter" : "student"} account</h4>
        </div>
        <div className={styles.formGroup}>
          Are you a {isPorter ? "student" : "porter"}? &#160;{" "}
          <span onClick={porterAction}>
            register as {isPorter ? "student" : "porter"}
          </span>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <input placeholder="Enter first name" type="text" name="" id="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <input placeholder="Enter last name" type="text" name="" id="" />
          </div>
        </div>
        {isPorter ? (
          <></>
        ) : (
          <div className={styles.formGroup}>
            <div>
              <i className="fa-solid fa-key"></i>
            </div>
            <div>
              <input placeholder="Matric number" type="tel" name="" id="" />
            </div>
          </div>
        )}

        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-house"></i>
          </div>
          <div>
            <select
              className="custom-select"
              style={{ width: "100%" }}
              onChange={onOptionChangeHandler}
            >
              {AllOptions.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <input placeholder="Email Address" type="email" name="" id="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div>
            <input placeholder="Password" type="password" name="" id="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div>
            <input
              placeholder="Confirm password"
              type="password"
              name=""
              id=""
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          {" "}
          <button type="submit">Register</button>
        </div>
        <div className={styles.formGroup}>
          Already have an account? &#160;{" "}
          <Link href={`/login?porter=false`}>
            <span>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
