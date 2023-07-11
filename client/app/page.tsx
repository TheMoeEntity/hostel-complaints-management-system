import Dashboard from "@/components/dashboard";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signIn } from "next-auth/react";

const getRefresh = async (signIn: Promise<undefined>) => {
  const session = await getServerSession(authOptions);
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/login/refresh/";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: session?.user.refresh }),
  });
  if (res.status === 401) {
    signIn;
  }

  return res.json();
};
const getComplaints = async (resr: any) => {
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + resr,
    },
  });

  if (res.status === 401) {
    const newAccess = await getRefresh(signIn());
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + newAccess.access,
      },
    });
    return res.json();
  }

  if (!res.ok) {
    return undefined;
  }

  return res.json();
};

const getDashCount = async (resr: any) => {
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/dashboard-count/";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + resr,
    },
  });
  if (res.status === 401) {
    const newAccess = await getRefresh(signIn());
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + newAccess.access,
      },
    });
    return res.json();
  }

  if (!res.ok) {
    return undefined;
  }

  return res.json();
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  const dashCount = await getDashCount(session?.user.access);
  const comps = await getComplaints(session?.user.access);

  return (
    <main className={styles.main}>
      <Dashboard dashCount={dashCount ?? false} comps={comps ?? "error"} />
    </main>
  );
}
