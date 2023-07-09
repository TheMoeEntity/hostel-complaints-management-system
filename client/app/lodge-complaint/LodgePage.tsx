"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styles from "../../components/index.module.css";
import Chatscreen from "@/components/Chatscreen/index.jsx";

const LodgePage = () => {
  const inputFile = useRef<null | HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const [show,setShow] = useState(false)
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className={styles.main}>
      <Chatscreen close={()=> setShow(false)} show={show} />
      <div className={styles.lodge}>
        <div>
          <div>
            <button> + Make a complaint</button>
          </div>
          <div>
            <ul>
              <li>
                <i className="fa fa-envelope"></i> <span>Inbox</span>
              </li>
              <li>
                <i className="fa-solid fa-paper-plane"></i> <span>Sent</span>
              </li>
              <li>
                <i className="fa-solid fa-star"></i> <span>Favorite</span>
              </li>
              <li>
                <i className="fa fa-clock"></i> <span>Scheduled</span>
              </li>
            </ul>
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
        <div>
          <form action="" onSubmit={(e) => handleSubmit}>
            <input placeholder="To:" type="text" />
            <input placeholder="Subject" type="text" />
            <input placeholder="Category: Light" type="text" readOnly />
            <textarea
              placeholder="Enter text"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
            <div>
              <i className="fa-solid fa-paperclip"></i>
              <b>Attachment</b>
            </div>
            <div className={styles.attach}>
              <p>Click to upload extra files</p>
            </div>
            <input
              onChange={(e) => handleFileSelected(e)}
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />
            <div>
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
                Lodge Complaint
              </button>
              <button onClick={()=> setShow(true)} style={{ marginLeft: "20px" }} type="button">
                <i className="fa-solid fa-robot"></i>
                AI Assistant
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LodgePage;
