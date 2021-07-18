// 입력을 담당하는 컴포넌트
import React, { useState } from "react";
import { dbService } from "fbase";

const WriteList = ({ userObj, docObj, initObj }) => {
  const [todo, setTodo] = useState([]);
  const Dates = new Date();
  // Change
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTodo(value);
  };
  // Submit
  const onSubmit = async (event) => {
    event.preventDefault();
    if (todo === "") return;
    // 기존의 투두리스트가 있나 확인
    const todoDocRef = await dbService
      .collection("todos")
      .where("creatorId", "==", userObj.uid)
      .where("createYear", "==", Dates.getFullYear())
      .where("createMonth", "==", Dates.getMonth() + 1)
      .where("createDate", "==", Dates.getDate())
      .get()
      .catch((error) => {
        console.log(error);
      });
    if (docObj.size === 0) {
      console.log("create new");
      let todoKey = { id: Date.now(), text: todo };
      let newTodoObj = {
        text: [todoKey],
        createAt: Date.now(),
        creatorId: userObj.uid,
        createYear: Dates.getFullYear(),
        createMonth: Dates.getMonth() + 1,
        createDate: Dates.getDate(),
        finished: [],
        userName: userObj.displayName,
      };
      await dbService.collection("todos").add(newTodoObj);
      window.location.reload();
    }
    let todoDoc = todoDocRef.docs[0].data();
    let docId = todoDocRef.docs[0].id;
    const todoText = todoDoc.text;
    todoText.push({ text: todo, id: Date.now() });
    await dbService.doc(`todos/${docObj.id}`).update({ text: todoText });
    setTodo("");
  };

  return (
    <>
      <div class="modal">
        <iframe
          class="modalViewer_video noselect"
          width="500"
          heigth="315"
          src="https://www.youtube.com/embed/rEaU6IwH3fw?autoplay=1&loop=1&playlist=rEaU6IwH3fw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div class="block_mouse"></div>
        <h1 class="h1">If background video is not playing try refresh😋</h1>
        <div class="close cursor">❌</div>
        <form class="modal_form pos_rel" onSubmit={onSubmit}>
          <div class="gradient_border">
            <h2 class="modal_h2">JUST DO IT!😜</h2>
            <input
              type="text"
              class="modal_input"
              placeholder="Write to do list"
              onChange={onChange}
              value={todo}
            />
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteList;
