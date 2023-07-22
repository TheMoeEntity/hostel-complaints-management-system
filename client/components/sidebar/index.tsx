"use client";
import styles from "../index.module.css";
import { assets } from "@/Helpers/Types";
import { Profile } from "../dashboard/Profile";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../public/images/crawford-logo.png";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Sidebar = () => {
  const { data: session } = useSession();
  const backgroundMode: string = session?.user.is_porter
    ? "linear-gradient(90deg, #4E44B5, #3a3192)"
    : "linear-gradient(90deg, #4985ed, #538cef)";

  const searchparams = useSearchParams();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const sideBarRef = useRef<null | HTMLInputElement>(null);
  const [isPorter, setPorter] = useState<boolean>(false);
  const [sidebar, setSideBar] = useState<boolean>(false);
  const [filteredAssets, setFiltered] =
    useState<{ title: string; icon: string; link: string }[]>(assets);

  const checkPorter = (): { title: string; icon: string; link: string }[] => {
    session?.user.is_student === true || session?.user.is_student === undefined
      ? setFiltered(assets.filter((x) => x.title !== "Students"))
      : setFiltered(assets);

    return filteredAssets;
  };
  useEffect(() => {
    const search = searchparams.get("porter");
    if (search == "true") {
      setPorter(true);
    } else if (search === "false" || !search) {
      setPorter(false);
    }
    checkPorter();
  }, []);

  return (
    <div>
      <div
        style={{
          background: backgroundMode,
          transform: sidebar ? "none" : " translateX(-100%)",
          width: sidebar ? "55%" : "20%",
        }}
        className={styles.sidebar2}
      >
        <div onClick={() => setSideBar(false)} className={styles.close}>
          &times;
        </div>
        <Link href={"/"}>
          <h2>Crawford University</h2>
        </Link>
        <h4>hostel management</h4>
        <ul>
          {filteredAssets.map((x, i) => (
            <li key={i}>
              <Link href={`${x.link}`}>
                <div>
                  <i style={{ marginRight: "10px" }} className={x.icon}></i>
                  {x.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ background: backgroundMode }}
        ref={sideBarRef}
        className={styles.sidebar}
      >
        {/* <div onClick={()=> setSideBar(false)} className={styles.close}>
          &times;
        </div> */}
        <section className={styles.logo}>
          <Image
            src={logo}
            alt="School logo image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </section>
        <Link href={"/"}>
          <h2>Crawford University</h2>
        </Link>
        <h4>hostel management</h4>
        <ul>
          {filteredAssets.map((x, i) => (
            <li key={i}>
              <Link href={`${x.link}`}>
                <div>
                  <i style={{ marginRight: "10px" }} className={x.icon}></i>
                  {x.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.titlebar}>
        <div className={styles.one}>
          <section onClick={() => setSideBar(true)} className={styles.sect}>
            <i className="fa-solid fa-bars"></i>
          </section>
          <h2>
            {pathname === "/account" ? "Edit Profile " : session?.user.hostel}
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
          {/* <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i className="fa-regular fa-moon"></i>
          </div>
          <div>
            <i className="fa-regular fa-bell"></i>
          </div> */}
          {session?.user.is_porter === true ? (
            <></>
          ) : (
            <div>
              <Link href={`/lodge-complaint`}>
                <i className="fa-regular fa-message"></i>
              </Link>
            </div>
          )}

          {/* <div>
            <i className="fa-solid fa-gear"></i>
          </div>
          <div>
            <i className="fa-regular fa-image"></i>
          </div> */}
          <div onClick={() => setProfileOpen(!profileOpen)}>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
