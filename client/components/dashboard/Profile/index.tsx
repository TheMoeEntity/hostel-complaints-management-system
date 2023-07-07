import styles from '../../index.module.css'
import Image from 'next/image'
import count1 from "../../../public/images/user.jpeg";
import Link from 'next/link';
import { useSession, getSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { payload } from '@/Helpers/Types';
const Profile = (props:{profileOpen:boolean, forceClose:() => void}) => {
  const {data:session} = useSession()
  console.log(session)
  const [cred,setCred] = useState(()=> {
    if (session) {
      return session
    }
  })
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
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.details}>
          <div>
            <b>{cred?.user.first_name}</b>
          </div>
          <div>{cred?.user.hostel}</div>
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
            <Link href={`/lodge-complaint`}>
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
            <Link href={`/complaints`}>
              <div>
                <i className="fa-solid fa-person-harassing"></i>Complaints
              </div>
            </Link>
          </li>
          <li onClick={()=> signOut()}>
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