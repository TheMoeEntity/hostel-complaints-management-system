"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import axios from 'axios'

type propType = {
  hostels: [{ name: string; id: string; gender: string }];
};

const SignupPage = ({ hostels }: propType) => {
  const searchparams = useSearchParams();
  const [isPorter, setPorter] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [status,setStatus] = useState('Register')
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hostelID = hostels.find((x) => x.name === selectedOption)?.id;
    const hostelGender = hostels.find((x) => x.name === selectedOption)?.gender;
    setStatus("Creating account....")
    const userDetails = {
      ...data,
      gender:hostelGender,
      hostel:hostelID,
    }
    console.log(userDetails)
    fetch('./api/register/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userDetails)
		})
		.then(async res => {
			const isJson = res.headers.get('content-type')?.includes('application/json')
			const data = isJson ? await res.json() : null
	  
			if (!res.ok) {
				
			  const error = (data && data.message) || res.status;
        enqueueSnackbar('There was an error registering user: ', {variant:'error'})
        console.log(data)
			  return Promise.reject(error)
			
			} else if (res.ok || res.status === 201 || res.status === 200) {
				console.log('new user created successfully')
        enqueueSnackbar('User successfully created', {variant:'success'})

			}
		})
		.catch(err => {
      enqueueSnackbar('Failed to register: '+err, {variant:'error'})
		})
    setStatus("Register")
  };
  const [selectedOption, setSelectedOption] = useState<String>(hostels[0].name);
  const [gender, setGender] = useState(hostels[0].gender);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    matric_number: "",
    email:"",
    hostel:selectedOption,
    gender,
    password:'',
    password2:''

  });
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    console.log(hostels);
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
            <input value={data.first_name} onChange={(e)=> setData(x => {return {...x,first_name:e.target.value} })} placeholder="Enter first name" type="text" name="" id="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <input value={data.last_name} onChange={(e)=> setData(x => {return {...x,last_name:e.target.value} })} placeholder="Enter last name" type="text" name="" id="" />
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
              <input value={data.matric_number} onChange={(e)=> setData(x => {return {...x,matric_number:e.target.value} })} placeholder="Matric number" type="tel" name="" id="" />
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
              {hostels.map((option, index) => {
                return <option key={index}>{option.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <input value={data.email} onChange={(e)=> setData(x => {return {...x,email:e.target.value} })} placeholder="Email Address" type="email" name="" id="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div>
            <input value={data.password} onChange={(e)=> setData(x => {return {...x,password:e.target.value} })} placeholder="Password" type="password" name="" id="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div>
            <input
            value={data.password2} onChange={(e)=> setData(x => {return {...x,password2:e.target.value} })}
              placeholder="Confirm password"
              type="password"
              name=""
              id=""
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          {" "}
          <button type="submit">{status}</button>
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

export default SignupPage;
