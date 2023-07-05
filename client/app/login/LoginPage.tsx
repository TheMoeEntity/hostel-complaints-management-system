"use client";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../page.module.css";
import { useSearchParams, useRouter } from "next/navigation"
import { useSnackbar } from "notistack";

const LoginPage = () => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar();
  const [status, setStatus] = useState<string>("Login");
  const searchparams = useSearchParams();
  const [isPorter, setPorter] = useState<boolean>(false);
  const matricRef = useRef<null | HTMLInputElement>(null)
  const mailRef = useRef<null | HTMLInputElement>(null)
  const passRef = useRef<null | HTMLInputElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    const userDetails = {
      matric_number: matricRef.current?.value,
      password:passRef.current?.value,
      porter: "false",
    };
    const porterDetails = {
      matric_number: 'null',
      email:mailRef.current?.value,
      password:passRef.current?.value,
      porter: "true",
    };
    setStatus("Loggin in....");


    await fetch("./api/login/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(isPorter ? porterDetails:userDetails),
    })
      .then(async (res) => {
        const isJson = res.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await res.json() : null;

        if (!res.ok) {
          let stuff = data;
          const msg = JSON.parse(stuff);
          // const responseMsg = msg;
          const error = (data && data.message) || res.statusText;
          // for (const key in responseMsg) {
 
          //   setTimeout(() => {
          //     switch (key) {
          //       case "email":
          //         enqueueSnackbar(responseMsg[key][0], {
          //           variant: "error",
          //         });
          //         break;
          //       case "matric_number":
          //         enqueueSnackbar(
          //           "Invalid field: " + key + ". " + responseMsg[key][0],
          //           {
          //             variant: "error",
          //           }
          //         );
          //         break;
          //         case "non_field_errors":
          //           enqueueSnackbar(responseMsg[key][0], {
          //             variant: "error",
          //           });
          //           break
          //         case "detail":
          //           enqueueSnackbar(responseMsg[key][0], {
          //             variant: "error",
          //           });
          //           break;

          //       default:
          //         break;
          //     }
          //   }, 1300);
          // }
          console.log(stuff);
          return Promise.reject(error);
        } else if (res.ok || res.status === 201 || res.status === 200) {
          let stuff = data;
          const msg = JSON.parse(stuff);
          console.log("Login successful: "+ msg);
          enqueueSnackbar("Login successful", {
            variant: "success",
          });
          setTimeout(() => {
            router.push('/')
          }, 800);
        }
      })
      .catch((err) => {
        enqueueSnackbar("Failed to login: " + err, { variant: "error" });
      });
    setStatus("Login");
  };
 
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
            {isPorter ? "Login as porter" : "Login to your student portal"}
          </h4>
        </div>
        <div className={styles.formGroup}>
          Are you a {isPorter ? "student" : "porter"}? &#160;{" "}
          <span onClick={porterAction}>
            login as {isPorter ? "student" : "porter"}
          </span>
        </div>
        {isPorter ? (
          <div className={styles.formGroup}>
            <div>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <input
              ref={mailRef}
                // defaultValue={"komodo@icloud.com"}
                // value={data.email}
                // onChange={(e) =>
                //   setData((x) => {
                //     return { ...x, email: e.target.value };
                //   })
                // }
                placeholder="Email address"
                type="email"
                name=""
                id=""
              />
            </div>
          </div>
        ) : (
          <div className={styles.formGroup}>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <input
          
                // value={data.matric_number}
                // onChange={(e) =>
                //   setData((x) => {
                //     return { ...x, email: e.target.value };
                //   })
                // }
                ref={matricRef}
                placeholder="Matric number"
                type="text"
                name=""
                id=""
               
              />
            </div>
          </div>
        )}

        <div className={styles.formGroup}>
          <div>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div>
            <input
              // value={data.password}
              // onChange={(e) =>
              //   setData((x) => {
              //     return { ...x, email: e.target.value };
              //   })
              // }
              ref={passRef}
              placeholder="Password"
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
          {`Don't`} have an account? &#160;{" "}
          <Link href={`/register?porter=false`}>
            <span>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
