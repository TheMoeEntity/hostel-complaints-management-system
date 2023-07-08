"use client";
import styles from "../index.module.css";
import { assets } from "@/Helpers/Types";
import { Profile } from "../dashboard/Profile";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../../public/images/crawford-logo.png";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Sidebar = () => {
  const { data: session } = useSession();
  const backgroundMode:string = session?.user.is_porter
    ? "linear-gradient(90deg, #4E44B5, #3a3192)"
    : "linear-gradient(90deg, #4985ed, #538cef)";
  const text:string = session?.user.is_porter ? "Porters" : "Students"
  const iconClass:string = session?.user.is_porter ? "fa-solid fa-person":"fas fa-graduation-cap"
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const sideBarRef = useRef<null | HTMLInputElement>(null);
  const [isPorter, setPorter] = useState<boolean>(false);
  const [sidebar, setSideBar] = useState<boolean>(false);
  const [filteredAssets, setFiltered] =
    useState<{ title: string; icon: string; link: string }[]>(assets);

  const checkPorter = (): { title: string; icon: string; link: string }[] => {
    isPorter || pathname === "/porters"
      ? setFiltered(assets.filter((x) => x.title !== "Students"))
      : setFiltered(assets.filter((x) => x.title !== "Porters"));

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

  useEffect(()=> {
    console.log(sideBarRef.current?.style.width)
      // if (sidebar === true) {
      //   showSideBar('none')
      // } else {
      //   showSideBar('translateX(-100%)')
      // }
  },[sidebar])

  const showSideBar = (show: string) => {
    if (sideBarRef.current) {
      sideBarRef.current.style.transform = show;
    }
  };
  const open = () => {
    setSideBar(true);
  };

  return (
    <div>
      <div
        style={{ background: backgroundMode, width:sidebar ? '425%':'20%' }}
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
          {assets.map((x, i) =>
            i === 1 ? (
              <li key={i}>
                <Link href={`${x.link}`}>
                  <div>
                    <i style={{ marginRight: "10px" }} className={iconClass}></i>
                    {text}
                  </div>
                </Link>
              </li>
            ) : (
              <li key={i}>
                <Link href={`${x.link}`}>
                  <div>
                    <i style={{ marginRight: "10px" }} className={x.icon}></i>
                    {x.title}
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className={styles.titlebar}>
        <div className={styles.one}>
          <section onClick={open} className={styles.sect}>
            <i className="fa-solid fa-bars"></i>
          </section>
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
