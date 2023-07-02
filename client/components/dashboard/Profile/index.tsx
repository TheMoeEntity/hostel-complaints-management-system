import styles from '../../index.module.css'
import Image from 'next/image'
import count1 from "../../../public/images/user.jpeg";
import Link from 'next/link';
const Profile = (props:{profileOpen:boolean, forceClose:() => void}) => {
  return (
    <section
      style={{
        bottom: !props.profileOpen ? "100px" : "-390px",
        visibility: !props.profileOpen ? "hidden" : "visible",
      }}
      className={styles.profileModal}
    >
      <div className={styles.userheader}>
        <div style={{position:'relative'}}>
          <Image
            src={count1}
            alt="user image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.details}>
          <div>
            <b>Moses</b>
          </div>
          <div>Biobaku Hall</div>
        </div>
      </div>
      <div className="">
        <ul>
          <li>
            <Link href={`/account`}>
              <div>
                <i className="fa-solid fa-user"></i> My Account
              </div>
            </Link>
          </li>
          <li>
            <Link href={`/account?link=wishlist`}>
              <div>
                <i className="fas fa-pen"></i> Lodge Complaint
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>
            <div>
              <i className="fa-solid fa-circle-half-stroke"></i>Dark mode
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-person-harassing"></i>Complaints
            </div>
          </li>

          <li>
            <div>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export {Profile}