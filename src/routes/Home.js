// 로그인 후 들어올 수 있는 메인 페이지
import React, { useEffect, useState } from "react";
import ShowList from "components/ShowList";
import Calender from "components/Calender";
import { dbService } from "fbase";

const Home = ({ userObj }) => {
  const [docs, setDocs] = useState([]);
  const [init, setInit] = useState(false);
  const [dateObj, setDateObj] = useState(new Date());

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
        setInit(true);
      });
  };

  useEffect(() => {
    console.log(dateObj);
    if (init === false) {
      initialize();
    }
  }, [init]);

  useEffect(() => {
    setInit(false);
    console.log(dateObj);
    if (init === false) {
      initialize();
    }
  }, [dateObj]);

  return (
    <div>
      {init &&
        docs.map((doc) => (
          <ShowList userObj={userObj} docObj={doc} date={dateObj} />
        ))}
      {/* <Calender dateObj={dateObj} setDateObj={(value) => setDateObj(value)} /> */}
    </div>
  );
};

export default Home;
