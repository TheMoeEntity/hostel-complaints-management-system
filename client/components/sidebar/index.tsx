import styles from "../index.module.css";
import { assets } from "@/Helpers/Types";
import { Profile } from "../dashboard/Profile";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Sidebar = () => {
  const searchparams = useSearchParams()
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [isPorter, setPorter] = useState<boolean>(false)
  const [filteredAssets, setFiltered] = useState<{title:string,icon:string}[]>(assets)

  const checkPorter = ():{title:string,icon:string}[] => {

    isPorter || pathname === '/porters' ? setFiltered(assets.filter(x => x.title !== 'Students')):setFiltered(assets.filter(x => x.title !== 'Porters'))

    return filteredAssets
  }
  useEffect(() => {
    const search = searchparams.get("porter");
    if (search == "true") {
      setPorter(true);
    } else if (search === "false" || !search) {
      setPorter(false);
    }
    checkPorter()
  }, []);


  return (
    <div>
      <div className={styles.sidebar}>
        <Link href={"/"}>
          <h2>Crawford University</h2>
        </Link>
        <h4>hostel management</h4>
        <ul>
          {
          filteredAssets.map((x, i) => (
            <li className={styles.dash} key={i}>
              <div>
                <div>
                  <i className={x.icon}></i>
                  <div className={styles.tit}>{x.title}</div>
                </div>
                <div className={styles.tits}>
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
            {pathname === "/account" ? "Edit Profile " : "Biobaku Hall "}
            {pathname === "/account" ? (
              <i className="fa-solid fa-pen"></i>
            ) : (
              <span>
                &#160;&#160;<i className="fa-solid fa-building"></i>
              </span>
            )}
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
