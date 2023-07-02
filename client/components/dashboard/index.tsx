import styles from "../index.module.css";
import { assets } from "@/Helpers/Types";
import Image from "next/image";
import count1 from '../../public/images/user.jpeg'
import CalendarComponent from "./Calendar";


const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <h2>Crawford Uni</h2>
        <ul>
          {assets.map((x, i) => (
            <li className={styles.dash} key={i}>
              <div>
                <div>
                  <i className={x.icon}></i>
                  <div className={styles.tit}>{x.title}</div>
                </div>
                <div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.main}>
        <div className={styles.titlebar}>
          <div>
            <h2>Dashboard</h2>
          </div>
          <div>
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
            <div>
            <Image
                src={count1}
                alt="user-profile"
                fill
                quality={100}
                priority={true}
                style={{borderRadius:'6px', objectFit:"cover"}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.bar}>
            <div className={styles .first}>
              <div><i className='fa-solid fa-user'></i></div>
              <div>
                <div>Students</div>
                <strong>235</strong>
              </div>
            </div>
            <div className={styles.second}>
              <div><i className='fa-solid fa-house'></i></div>
              <div>
                <div>Hostels</div>
                <strong>235</strong>
              </div>
            </div>
            <div className={styles.third}>
              <div><i className='fa-solid fa-user'></i></div>
              <div>
                <div>Events</div>
                <strong>235</strong>
              </div>
            </div>
            <div className={styles.fourth}>
              <div><i className='fa-solid fa-user'></i></div>
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
