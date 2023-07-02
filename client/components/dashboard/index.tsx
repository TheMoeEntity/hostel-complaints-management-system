'use client'
import styles from "../index.module.css";
import CalendarComponent from "./Calendar";
import { Charts } from "./Charts";
import { Profile } from "./Profile";
import { useState } from "react";

const Dashboard = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>
        {/* <div className={styles.titlebar}>
          <div>
            <h2>
              Dashboard <i className="fa-solid fa-gauge"></i>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            <Profile
              profileOpen={profileOpen}
              forceClose={() => setProfileOpen(false)}
            />
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <i className="fa-regular fa-moon"></i>
            </div>
            <div>
              <i className="fa-regular fa-bell"></i>
            </div>
            <div>
              <i className="fa-regular fa-message"></i>
            </div>
            <div>
              <i className="fa-solid fa-gear"></i>
            </div>
            <div>
              <i className="fa-regular fa-image"></i>
            </div>
            <div onClick={()=> setProfileOpen(!profileOpen)}>
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div> */}

        <div className={styles.bar}>
          <div className={styles.first}>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <div>Students</div>
              <strong>235</strong>
            </div>
          </div>
          <div className={styles.second}>
            <div>
              <i className="fa-solid fa-house"></i>
            </div>
            <div>
              <div>Hostels</div>
              <strong>235</strong>
            </div>
          </div>
          <div className={styles.third}>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <div>Events</div>
              <strong>235</strong>
            </div>
          </div>
          <div className={styles.fourth}>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <div>students</div>
              <strong>235</strong>
            </div>
          </div>
        </div>

        <div className={styles.calendar}>
          <div>
            <h3>School Calendar: </h3>
            <CalendarComponent />
          </div>
          <div>
            <Charts types="bar" />
          </div>
        </div>
        <div className={styles.notice}>
          <div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-calendar"></i> Notice Board
              </h3>
            </div>
            <div className={styles.currentNotice}>
              <div>GEG 322 Operational Anal. [23rd May, 2023, 08:30pm].</div>
              <div>Testing [23rd May, 2023, 08:30pm].</div>
              <div>Testing [23rd May, 2023, 08:30pm].</div>
            </div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-warning"></i> &#160;&#160;&#160;Meet
                the deadline
              </h3>
              <h3>View all</h3>
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

export { Dashboard };
