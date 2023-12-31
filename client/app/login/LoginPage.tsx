"use client";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../page.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [status, setStatus] = useState<string>("Login");
  const searchparams = useSearchParams();
  const [isPorter, setPorter] = useState<boolean>(false);
  const matricRef = useRef<null | HTMLInputElement>(null);
  const mailRef = useRef<null | HTMLInputElement>(null);
  const passRef = useRef<null | HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const callbackUrl = "/dashboard";
    const userDetails = {
      matric_number: matricRef.current?.value,
      password: passRef.current?.value,
      porter: "false",
    };
    const porterDetails = {
      matric_number: "null",
      email: mailRef.current?.value,
      password: passRef.current?.value,
      porter: "true",
    };
    setStatus("Loggin in....");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: porterDetails.email,
        matric: isPorter ? "null" : userDetails.matric_number,
        password: isPorter ? porterDetails.password : userDetails.password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
        enqueueSnackbar("Login success", { variant: "success" });
      } else {
        enqueueSnackbar(res?.error.slice(11, res?.error.length - 2), {
          variant: "error",
        });
      }
    } catch (error) {
      enqueueSnackbar("Failed to login: " + error, { variant: "error" });
    }
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
          <h4 style={{ paddingBottom: "8px" }}>
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
          <button type="submit">
            {status !== "Login" && (
              <i
                className={`fa fa-spinner ${styles.rotate}`}
                aria-hidden="true"
              ></i>
            )}{" "}
            {status}
          </button>
        </div>
        <div className={styles.formGroup}>
          {`Don't`} have an account? &#160;{" "}
          <Link href={`/register?porter=false`}>
            <span>Register</span>&#160;
          </Link>
          or&#160;
          <Link href={`/`}>
            <span> Go to Homepage</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
