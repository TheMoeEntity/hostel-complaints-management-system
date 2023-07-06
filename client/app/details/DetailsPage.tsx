"use client";
import Image from "next/image";
import man from "../../public/images/user.jpeg";
import { useRouter } from "next/navigation";
import styles from "../../components/index.module.css";

const DetailsPage = () => {
  const router = useRouter();
  const linkAction = (to: string) => {
    router.push("/" + to);
  };
  return (
    <div className={styles.main}>
      <div className={styles.lodge}>
        <div>
          <div>
            <button>Complaints for Biobaku </button>
          </div>
          <div>
            <b>Categories</b>
            <ul className={styles.collapse}>
              <li>
                <i className="fa-solid fa-droplet"></i> <span>Water</span>
              </li>
              <li>
                <i className="fa-solid fa-person-through-window"></i>{" "}
                <span>Theft</span>
              </li>
              <li>
                <i className="fa-solid fa-lightbulb"></i> <span>No Light</span>
              </li>
              <li>
                <i className="fa-solid fa-bug"></i> <span>Bed bug</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-info"></i> <span>Others</span>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div style={{ padding: "20px 10px" }}>
          <div className={styles.compHeader}>
            <div className={styles.image}>
              <div
                style={{ width: "80px", height: "80px", position: "relative" }}
              >
                <Image
                  src={man}
                  alt="user image"
                  layout="fill"
                  quality={100}
                  priority={true}
                  style={{ borderRadius: "50%" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.name}>
                <span>
                  <b>Mr Ogechukwu</b>
                </span>
                <span>23 May, 2023</span>
              </div>
            </div>
          </div>
          <div className={styles.compTitle}>
            <div>
              <h3>A collection of textile samples lay spread</h3>
            </div>
            <div>07:30 AM</div>
          </div>
          <p className={styles.comp}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            excepturi eveniet cumque cupiditate repellat impedit corporis sed
            ullam sapiente rerum ut a nisi blanditiis ad illum quis praesentium
            hic labore, fugit quos consectetur quo placeat perspiciatis
            necessitatibus. Reiciendis aliquam natus saepe voluptates vitae
            necessitatibus at unde ex doloribus. Odio, voluptas?
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            excepturi eveniet cumque cupiditate repellat impedit corporis sed
            ullam sapiente rerum ut a nisi blanditiis ad illum quis praesentium
            hic labore, fugit quos consectetur quo placeat perspiciatis
            necessitatibus. Reiciendis aliquam natus saepe voluptates vitae
            necessitatibus at unde ex doloribus. Odio, voluptas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
