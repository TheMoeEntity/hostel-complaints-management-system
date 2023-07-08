"use client";
import { useSession } from "next-auth/react";
import styles from "../index.module.css";
import CalendarComponent from "./Calendar";
import Charts from "./Charts";


const Dashboard = ({dashCount}:any) => {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>
        <h2 style={{color:'#303973'}}>{`Welcome, ${session?.user.first_name}`} </h2>
        <div className={styles.bar}>
          <div className={styles.first}>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <div>Students</div>
              <strong>{dashCount.data.student_count}</strong>
            </div>
          </div>
          <div className={styles.second}>
            <div>
              <i className="fa-solid fa-building"></i>
            </div>
            <div>
              <div>Rooms</div>
              <strong>{dashCount.data.hostel_room_count}</strong>
            </div>
          </div>
          <div className={styles.third}>
            <div>
              <i className="fa-solid fa-person-harassing"></i>
            </div>
            <div>
              <div>Complaints</div>
              <strong>{dashCount.data.complaints_count}</strong>
            </div>
          </div>
          <div className={styles.fourth}>
            <div>
              <i className="fa-solid fa-person"></i>
            </div>
            <div>
              <div>Porter</div>
              <strong>{dashCount.data.porter_count}</strong>
            </div>
          </div>
        </div>

        <div className={styles.calendar}>
          <div className={styles.calendarContainer}>
            <h3>School Calendar: </h3>
            <CalendarComponent  />
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
              <div>{`There's`} no light anywhere dawg [23rd May, 2023, 08:30pm].</div>
              <div>Kerry keeps stealing my provisons [23rd May, 2023, 08:30pm].</div>
              <div>Moses carries olosho too much [23rd May, 2023, 08:30pm].</div>
            </div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-building"></i> &#160;&#160;&#160;Biobaku
              </h3>
              <h3 style={{color: '#33A0FC'}}>View all complaints</h3>
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

export default Dashboard;
