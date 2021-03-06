import React, { useState, useEffect, useRef } from "react";
import { dbService } from "fbase";
import WriteList from "components/WriteList";

const ShowList = ({ userObj, docObj }) => {
  const [todos, setTodos] = useState(docObj.text);
  const [finisheds, setFinisheds] = useState(docObj.finished);
  const [showModal, setShowModal] = useState(false);

  const movie = useRef();
  const movieVideo = useRef();
  const movieDefault = useRef();

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
      setTodos(newTodo);
      setFinisheds(newFinished);
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
      setTodos(newTodo);
      setFinisheds(newFinished);
      await dbService
        .doc(`todos/${docObj.id}`)
        .update({ text: newTodo, finished: newFinished });
    }
  };

  const offModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    console.log("????????? ??????");
    if (docObj.length !== 0) {
      dbService.doc(`todos/${docObj.id}`).onSnapshot((doc) => {
        let t = doc.data().text;
        let f = doc.data().finished;
        setTodos(t);
        setFinisheds(f);
      });
    }
  }, []);

  useEffect(() => {
    if (!showModal) {
      if (todos.length === 0 && finisheds.length === 0) {
        console.log("modal??? ???????????? ????????? ??????");
        setTimeout(() => {
          movieVideo.current.contentWindow.postMessage(
            '{"event":"command","func":"stopVideo","args":""}',
            "*"
          );
        }, 1000);
        movieDefault.current.classList.add("dp_block");
        movieVideo.current.classList.remove("dp_block");
      } else {
        console.log("modal??? ????????? ????????? ??????");
        movieVideo.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
        movieVideo.current.classList.add("dp_block");
        movieDefault.current.classList.remove("dp_block");
      }
    } else {
      console.log("????????? ??????");
      movieVideo.current.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      );
    }
  }, [showModal]);

  useEffect(() => {
    if (todos.length === 0 && finisheds.length === 0) {
      if (showModal === false) {
        console.log("modal??? ??????");
        setShowModal(true);
      }
    } else {
      if (showModal === true) {
        console.log("modal??? ??????");
        setShowModal(false);
      }
    }
  }, [todos]);

  return (
    <>
      <div className="container">
        {showModal && (
          <WriteList docObj={docObj} offModal={(value) => offModal()} />
        )}
        <h1 className="title">TO DO LIST TODAY!</h1>
        <div className="wrap" ref={movie}>
          <div className="gradient_border">
            <div
              className="write cursor pos_rel"
              onClick={() => setShowModal(true)}
            >
              <span className="pos_rel">Write</span>
            </div>
            <div className="content_wrap">
              <div className="toDoList">
                <ul className="pending">
                  Pending
                  {todos &&
                    todos.map((todo, index) => {
                      return (
                        <li
                          key={index}
                          id={todo.id}
                          name="todos"
                          className="pending_li"
                        >
                          {index + 1}. {todo.text}
                          <button
                            className="cursor x_btn"
                            onClick={onDeleteClick}
                          >
                            ???
                          </button>
                          <button
                            className="cursor f_btn"
                            onClick={onMoveClick}
                          >
                            ???
                          </button>
                        </li>
                      );
                    })}
                </ul>
                <ul className="finished">
                  Finished
                  {finisheds &&
                    finisheds.map((finished, index) => {
                      return (
                        <li
                          key={index}
                          id={finished.id}
                          name="finisheds"
                          className="finished_li"
                        >
                          {index + 1}. {finished.text}
                          <button
                            className="cursor x_btn"
                            onClick={onDeleteClick}
                          >
                            ???
                          </button>
                          <button
                            className="cursor f_btn"
                            onClick={onMoveClick}
                          >
                            ???
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="movieViewer">
                <h2>
                  {todos.length === 0 ? (
                    finisheds.length === 0 ? (
                      "Add Do it list!"
                    ) : (
                      <span>
                        {userObj.displayName} done {finisheds.length} list!
                      </span>
                    )
                  ) : (
                    <span>
                      {userObj.displayName} have {todos.length} todo list!
                    </span>
                  )}
                </h2>
                <div className="movieViewer_default" ref={movieDefault}>
                  ????
                </div>
                <iframe
                  title="video"
                  id="player1"
                  className="movieViewer_video"
                  width="450"
                  height="252"
                  src="https://www.youtube.com/embed/sXFfd9OL5Ao?autoplay=1&mute=0&loop=1&enablejsapi=1&playlist=sXFfd9OL5Ao"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={movieVideo}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowList;
