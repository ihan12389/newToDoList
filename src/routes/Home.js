// 로그인 후 들어올 수 있는 메인 페이지
import React, { useEffect, useState, useRef } from "react";
import ShowList from "components/ShowList";
import Calender from "components/Calender";
import styled from "styled-components";
import { dbService } from "fbase";
const Home = ({ userObj }) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateObj, setDateObj] = useState(new Date());

  const show = useRef();
  const cal = useRef();
  const open = useRef();

  const initObj = {
    text: [],
    createAt: Date.now(),
    creatorId: userObj.uid,
    createYear: dateObj.getFullYear(),
    createMonth: dateObj.getMonth() + 1,
    createDate: dateObj.getDate(),
    finished: [],
    userName: userObj.displayName,
  };

  const initialize = async () => {
    await dbService
      .collection("todos")
      .where("creatorId", "==", userObj.uid)
      .where("createYear", "==", dateObj.getFullYear())
      .where("createMonth", "==", dateObj.getMonth() + 1)
      .where("createDate", "==", dateObj.getDate())
      .onSnapshot((snapshot) => {
        if (snapshot.size === 0) {
          dbService.collection("todos").add(initObj);
          setDocs([]);
        } else {
          const docArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDocs(docArray);
        }
        setLoading(true);
      });
  };

  const openCalender = (event) => {
    console.log(event.target);
    show.current.classList.add("dp_none");
    open.current.classList.add("dp_none");
    cal.current.classList.remove("dp_none");
  };

  const closeCalender = () => {
    show.current.classList.remove("dp_none");
    open.current.classList.remove("dp_none");
    cal.current.classList.add("dp_none");
  };

  useEffect(() => {
    console.log(dateObj);
    if (loading === false) {
      initialize();
    }
  }, [loading]);

  useEffect(() => {
    setLoading(false);
    console.log(dateObj);
    if (loading === false) {
      initialize();
    }
    // document.body.style.backgroundImage = `url("src/img/${num}.jpg")`;
  }, [dateObj]);

  return (
    <>
      {loading && (
        <>
          <div className="showContainer" ref={show}>
            {docs.map((doc) => (
              <ShowList userObj={userObj} docObj={doc} date={dateObj} />
            ))}
          </div>
          <div className="openCld" onClick={openCalender} ref={open}>
            <span>Calender</span>
          </div>
          <div className="calContainer dp_none" ref={cal}>
            <Calender
              dateObj={dateObj}
              setDateObj={(value) => setDateObj(value)}
              closeCalender={(value) => closeCalender()}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
