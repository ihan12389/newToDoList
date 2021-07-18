// 입력을 담당하는 컴포넌트
import React, { useState } from "react";
import { dbService } from "fbase";

const WriteList = ({ docObj }) => {
  const [todo, setTodo] = useState([]);

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
    const docText = docObj.text;
    console.log(docText);
    docText.push({ text: todo, id: Date.now() });
    await dbService.doc(`todos/${docObj.id}`).update({ text: docText });
    setTodo("");
  };

  return (
    <>
      <div className="modal">
        <iframe
          className="modalViewer_video noselect"
          width="500"
          heigth="315"
          src="https://www.youtube.com/embed/rEaU6IwH3fw?autoplay=1&loop=1&playlist=rEaU6IwH3fw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="block_mouse"></div>
        <h1 className="h1">If background video is not playing try refresh😋</h1>
        <div className="close cursor">❌</div>
        <form className="modal_form pos_rel" onSubmit={onSubmit}>
          <div className="gradient_border">
            <h2 className="modal_h2">JUST DO IT!😜</h2>
            <input
              type="text"
              className="modal_input"
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
