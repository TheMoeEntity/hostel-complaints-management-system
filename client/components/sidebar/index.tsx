import styles from "../index.module.css";
import { assets } from "@/Helpers/Types";
import { Profile } from "../dashboard/Profile";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  const pathname = usePathname();
  return (
    <div>
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
      <div className={styles.titlebar}>
        <div>
          <h2>
            {
             pathname === '/account' ? 'Edit Profile ':'Dashboard ' 
            }
            {
             pathname === '/account' ? (<i className="fa-solid fa-pen"></i>):(<i className="fa-solid fa-gauge"></i>) 
            }
           
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
          <div onClick={() => setProfileOpen(!profileOpen)}>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
