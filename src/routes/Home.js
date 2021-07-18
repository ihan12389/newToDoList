// 로그인 후 들어올 수 있는 메인 페이지
import React, { useEffect, useState } from "react";
import ShowList from "components/ShowList";
import Calender from "components/Calender";
import { dbService } from "fbase";

const Home = ({ userObj }) => {
  const [docs, setDocs] = useState([]);
  const [init, setInit] = useState(false);
  const Dates = new Date();

  const initObj = {
    text: [],
    createAt: Date.now(),
    creatorId: userObj.uid,
    createYear: Dates.getFullYear(),
    createMonth: Dates.getMonth() + 1,
    createDate: Dates.getDate(),
    finished: [],
    userName: userObj.displayName,
  };

  const findFunc = async () => {
    await dbService
      .collection("todos")
      .where("creatorId", "==", userObj.uid)
      .where("createYear", "==", Dates.getFullYear())
      .where("createMonth", "==", Dates.getMonth() + 1)
      .where("createDate", "==", Dates.getDate())
      .onSnapshot((snapshot) => {
        if (snapshot.size === 0) {
          dbService.collection("todos").add(initObj);
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
    if (init === false) {
      findFunc();
    }
  }, [init]);

  return (
    <div>
      {init && docs.map((doc) => <ShowList userObj={userObj} docObj={doc} />)}
      <Calender />
    </div>
  );
};

export default Home;
