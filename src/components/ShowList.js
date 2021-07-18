import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import WriteList from "components/WriteList";

const ShowList = ({ userObj, docObj }) => {
  const [todos, setTodos] = useState(docObj.text);
  const [finisheds, setFinisheds] = useState(docObj.finished);

  const onDeleteClick = async (event) => {
    const {
      target: {
        parentNode: { id },
      },
    } = event;

    const ok = window.confirm("Are you sure you wnat to delete this nweet?");

    if (ok) {
      const {
        target: {
          parentNode: {
            attributes: {
              name: { value },
            },
          },
        },
      } = event;
      if (value === "todos") {
        const newText = todos.filter((todo) => {
          return todo.id !== parseInt(id);
        });
        setTodos(newText);
        await dbService.doc(`todos/${docObj.id}`).update({ text: newText });
      } else if (value === "finisheds") {
        const newText = finisheds.filter((finished) => {
          return finished.id !== parseInt(id);
        });
        setFinisheds(newText);
        await dbService.doc(`todos/${docObj.id}`).update({ finished: newText });
      }
    }
  };

  const onMoveClick = async (event) => {
    const {
      target: {
        parentNode: { id },
      },
    } = event;

    const {
      target: {
        parentNode: {
          attributes: {
            name: { value },
          },
        },
      },
    } = event;

    if (value === "todos") {
      const newTodo = todos.filter((todo) => {
        return todo.id !== parseInt(id);
      });

      const text = todos.filter((todo) => {
        return todo.id === parseInt(id);
      });
      text.id = Date.now();
      const newFinished = finisheds.concat(text);

      await dbService
        .doc(`todos/${docObj.id}`)
        .update({ text: newTodo, finished: newFinished });
    } else if (value === "finisheds") {
      const newFinished = finisheds.filter((finished) => {
        return finished.id !== parseInt(id);
      });
      const finished = finisheds.filter((done) => {
        return done.id === parseInt(id);
      });
      finished.id = Date.now();
      const newTodo = todos.concat(finished);
      await dbService
        .doc(`todos/${docObj.id}`)
        .update({ text: newTodo, finished: newFinished });
    }
  };

  useEffect(() => {
    if (docObj.length !== 0) {
      dbService.doc(`todos/${docObj.id}`).onSnapshot((doc) => {
        let t = doc.data().text;
        let f = doc.data().finished;
        setTodos(t);
        setFinisheds(f);
      });
    }
  }, []);

  return (
    <>
      <h1>TO DO LIST TODAY!</h1>
      {/* 전체 컨테이너 */}
      <div className="wrap">
        {/* 효과용 중간 컨테이너 */}
        <div className="gradient_border">
          {/* Write 효과용 글씨 */}
          <div className="write cursor pos_rel">
            <span className="pos_rel">Write</span>
          </div>
          {/* 콘텐트 랩 */}
          <div className="content_wrap">
            {/* 투두 리스트 */}
            <div className="toDoList">
              {/* 할 일! */}
              <ul className="pending">
                Pending
                {todos &&
                  todos.map((todo, index) => {
                    return (
                      <li key={index} id={todo.id} name="todos">
                        <span>{todo.text}</span>
                        <button onClick={onDeleteClick}>❌</button>
                        <button onClick={onMoveClick}>✔</button>
                      </li>
                    );
                  })}
              </ul>
              {/* 한 일! */}
              <ul className="finished">
                Finished
                {finisheds &&
                  finisheds.map((finished, index) => {
                    return (
                      <li key={index} id={finished.id} name="finisheds">
                        <span>{finished.text}</span>
                        <button onClick={onDeleteClick}>❌</button>
                        <button onClick={onMoveClick}>✔</button>
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* 동영상 컨테이너 */}
            <div className="movieViewer">
              <h2>Add Do it list!</h2>
              <div className="movieViewer_default">🙉</div>
              {/* 동영상 */}
              <iframe
                title="video"
                id="player1"
                className="movieViewer_video"
                width="450"
                height="252"
                src="https://www.youtube.com/embed/sXFfd9OL5Ao?mute=1&loop=1&enablejsapi=1&playlist=sXFfd9OL5Ao"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* 달력 버튼 */}
        <div className="openCld">
          <span>Calender</span>
        </div>
      </div>
      <WriteList userObj={userObj} docObj={docObj} />
    </>
  );
};

export default ShowList;
