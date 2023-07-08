import Image from "next/image"
import count1 from '../../public/images/user.jpeg'
import styles from "../../components/index.module.css";
const PorterCard = ({email, first, last}:{last:string|null, first:string|null, email:string|null}) => {
  return (
    <div style={{height:'auto'}} className={styles.firstDiv}>
    <div
      style={{ position: "relative", width: "120px", height: "120px" }}
    >
      <Image
        src={count1}
        alt="user image"
        layout="fill"
        quality={100}
        priority={true}
        style={{ borderRadius: "50%" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div>
      <span>{first+" "+last}</span>
      <span>{email}</span>
      <strong>Porter</strong>
    </div>
    {/* <ul>
      <li>
        <span>Complaints</span>
        <span>43</span>
      </li>
      <li>
        <span>Complaints (resolved)</span>
        <span>10</span>
      </li>
      <li>
        <span>Complaints (unresolved)</span>
        <span>6</span>
      </li>
    </ul> */}
  </div>
  )
}

export default PorterCard