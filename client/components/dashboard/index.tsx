"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../index.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import Charts from "./Charts";
const CalendarComponent = dynamic(() => import("./Calendar"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const DashboardPage = ({ dashCount, comps, hostelList }: any | undefined) => {
  const searchparams = useSearchParams();
  const { data: session, update } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const [latest, setLatest] = useState(
    comps.data ? comps.data.slice(0, 3) : comps.data
  );
  // const updateToken = async (newToken: string | null | boolean) => {
  //   await update({
  //     ...session,
  //     user: {
  //       ...session?.user,
  //       access: newToken,
  //     },
  //   });
  // };
  const showName = (): string => {
    return session ? `, ${session.user.first_name}` : "";
  };
  useEffect(() => {
    const search = searchparams.get("notFound");
    const student = searchparams.get("student");
    if (student === "true") {
      enqueueSnackbar("Students not authorized!", {
        variant: "info",
      });
    }
    if (search === "true") {
      enqueueSnackbar(
        "Requested resource not found! User/complaint may be deleted or transferred",
        {
          variant: "warning",
        }
      );
    }
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 1.4,
              },
            },
          }}
        >
          <h2 style={{ color: "#303973" }}>{`Welcome${showName() ?? ""}`}</h2>
        </motion.div>
        <div className={styles.bar}>
          <div className={styles.first}>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <div>Students</div>
              <strong>{dashCount.data?.student_count ?? "error"}</strong>
            </div>
          </div>
          <div className={styles.second}>
            <div>
              <i className="fa-solid fa-building"></i>
            </div>
            <div>
              <div>Rooms</div>
              <strong>{dashCount.data?.hostel_room_count ?? "error"}</strong>
            </div>
          </div>
          <div className={styles.third}>
            <div>
              <i className="fa-solid fa-person-harassing"></i>
            </div>
            <div>
              <div>Complaints</div>
              <strong>{dashCount.data?.complaints_count ?? "error"}</strong>
            </div>
          </div>
          <div className={styles.fourth}>
            <div>
              <i className="fa-solid fa-person"></i>
            </div>
            <div>
              <div>Porter</div>
              <strong>{dashCount.data?.porter_count ?? "error"}</strong>
            </div>
          </div>
        </div>

        <div className={styles.calendar}>
          <div className={styles.calendarContainer}>
            <h3>School Calendar: </h3>
            <CalendarComponent />
          </div>
          <div>
            <Charts />
          </div>
        </div>
        <div className={styles.notice}>
          <div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-person-harassing"></i>&#160; Latest
                Complaints
              </h3>
            </div>
            <div className={styles.currentNotice}>
              {comps === "error" ? (
                <span style={{ color: "red" }}>Error loading complaints</span>
              ) : (
                latest.map(
                  (
                    x: { description: string; date_filed: string },
                    i: number
                  ) => (
                    <div key={i}>
                      <i className="fa-solid fa-caret-left"></i>
                      {x.description} [{x.date_filed}]
                    </div>
                  )
                )
              )}
            </div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-building"></i> &#160;
                {session?.user.hostel}
              </h3>
              <Link href={`/complaints`}>
                <h3 style={{ color: "#33A0FC" }}>all complaints</h3>
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-warning"></i> Notice Board
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
