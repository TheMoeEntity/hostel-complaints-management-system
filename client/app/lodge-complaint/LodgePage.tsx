"use client";
import { FormEvent, useRef, useState } from "react";
import styles from "../../components/index.module.css";
import Chatscreen from "@/components/Chatscreen/";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { Helpers } from "@/Helpers/Types";
import { useRouter } from "next/navigation";

const LodgePage = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const inputFile = useRef<null | HTMLInputElement>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const [cat, setCat] = useState("Category: ");
  const [lodgeBtn, setLodgeBtn] = useState("Lodge Complaint");
  const textarea = useRef<null | HTMLTextAreaElement>(null);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLodgeBtn("Sending...");
    if (textarea.current) {
      if (
        textarea.current.value.trim() === "" ||
        textarea.current.value.length < 10
      ) {
        enqueueSnackbar("Description cannot be empty or short", {
          variant: "error",
        });
        setLodgeBtn("Lodge Complaint");
        return;
      } else if (cat.length === 10) {
        enqueueSnackbar("Category cannot be empty: ", { variant: "error" });
        setLodgeBtn("Lodge Complaint");
        return;
      }
      let accessToken;

      try {
        accessToken = session?.user.access;
        await fetch("./api/create/", {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
          body: JSON.stringify({
            title: cat,
            description: textarea.current.value,
            is_resolved: false,
          }),
        }).then(async (res) => {
          const isJson = res.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson ? await res.json() : null;
          if (res.status == 401) {
            if (session && textarea.current) {
              const newToken = await Helpers.getRefreshClient(session);

              await update({
                ...session,
                user: {
                  ...session?.user,
                  access: newToken.access,
                },
              });
              await fetch("./api/create/", {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + newToken.access,
                },
                body: JSON.stringify({
                  title: cat,
                  description: textarea.current.value,
                  is_resolved: false,
                }),
              });
            }
          }
          if (!res.ok) {
            const error = (data && data.message) || res.statusText;

            enqueueSnackbar(
              "Failed to send complaints: " + JSON.parse(data).message,
              {
                variant: "error",
              }
            );
            return Promise.reject(error);
          } else if (res.ok || res.status === 201 || res.status === 200) {
            if (textarea.current) textarea.current.value == "";
            enqueueSnackbar(
              "Your complaints have been successfully lodged and is being processed.",
              {
                variant: "success",
              }
            );
            setTimeout(() => {
              router.push("/dashboard");
            }, 750);
          }
        });
      } catch (error) {
        enqueueSnackbar("Failed to send complaints: " + error, {
          variant: "error",
        });
      }
      setLodgeBtn("Lodge Complaint");
    }
  };
  return (
    <div className={styles.main}>
      <Chatscreen close={() => setShow(false)} show={show} />
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
              <li
                onClick={() =>
                  setCat((x) => {
                    const newWord = x.slice(0, 9) + " plumbing";
                    return newWord;
                  })
                }
              >
                <i className="fa-solid fa-droplet"></i> <span>Plumbing</span>
              </li>
              <li
                onClick={() =>
                  setCat((x) => {
                    const newWord = x.slice(0, 9) + " Theft";
                    return newWord;
                  })
                }
              >
                <i className="fa-solid fa-person-through-window"></i>{" "}
                <span>Theft</span>
              </li>
              <li
                onClick={() =>
                  setCat((x) => {
                    const newWord = x.slice(0, 9) + " Electricity";
                    return newWord;
                  })
                }
              >
                <i className="fa-solid fa-lightbulb"></i>{" "}
                <span>Electricity</span>
              </li>
              {/* <li>
                <i className="fa-solid fa-bug"></i> <span>Bed bug</span>
              </li> */}
              <li
                onClick={() =>
                  setCat((x) => {
                    const newWord = x.slice(0, 9) + " others";
                    return newWord;
                  })
                }
              >
                <i className="fa-solid fa-circle-info"></i> <span>Others</span>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              placeholder="To: Crawford University Complaints Mgt"
              type="text"
              readOnly
            />
            <input
              placeholder="Subject: Student complaint"
              type="text"
              readOnly
            />
            <input value={cat} type="text" readOnly />
            <textarea
              placeholder="Enter complaint description"
              ref={textarea}
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
                <i
                  className={
                    lodgeBtn !== "Lodge Complaint"
                      ? `fa fa-spinner ${styles.rotate}`
                      : `fa-solid fa-paper-plane`
                  }
                ></i>
                {lodgeBtn}
              </button>
              <button
                onClick={() => setShow(true)}
                style={{ marginLeft: "20px" }}
                type="button"
              >
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
