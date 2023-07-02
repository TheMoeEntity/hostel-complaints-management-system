"use client";
import styles from "../index.module.css";
import CalendarComponent from "./Calendar";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>
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
              <i className="fa-solid fa-building"></i>
            </div>
            <div>
              <div>Rooms</div>
              <strong>235</strong>
            </div>
          </div>
          <div className={styles.third}>
            <div>
              <i className="fa-solid fa-person"></i>
            </div>
            <div>
              <div>Porters</div>
              <strong>29</strong>
            </div>
          </div>
          <div className={styles.fourth}>
            <div>
              <i className="fa-solid fa-person-harassing"></i>
            </div>
            <div>
              <div>Complaints</div>
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
            <Charts />
          </div>
        </div>
        <div className={styles.notice}>
          <div>
            <div className={styles.noticeHeader}>
              <h3>
                <i className="fa-solid fa-person-harassing"></i>&#160; Top
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
