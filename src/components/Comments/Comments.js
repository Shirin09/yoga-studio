import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { commentContext } from "../../context/CommentContext";
import { timeSince } from "../../helpers/calcTimeAgo";

const Comments = () => {
  const {
    addComment,
    getComment,
    comments,
    deleteComment,
    editComment,
    comment,
    getCommentById,
  } = useContext(commentContext);

  const [val, setVal] = useState("");
  const [newEditComm, setNewEditComm] = useState("");
  let params = useParams();
  let user = JSON.parse(localStorage.getItem("users"));
  useEffect(() => {
    getComment(params.id);
  }, []);
  const creatingComment = (e) => {
    e.preventDefault();
    let time = new Date().toLocaleDateString();
    let timeSeconds = Date.now();
    addComment(
      val,
      user.username,
      user.displayName,
      user.photoURL,
      params.id,
      time,
      timeSeconds
    );
    setVal("");
  };
  const handleChangeEdit = (e) => {
    setVal(e.target.value);
  };
  function deleteCommentTemp(id, productId) {
    deleteComment(id, productId);
  }
  const [bool, setBool] = useState(false);
  const [checkid, setCheckid] = useState();
  let [bool2, setBool2] = useState(true);
  const editComm = (id) => {
    setBool(true);
    setCheckid(id);
  };
  const changeEditedComm = (e) => {
    setNewEditComm(e.target.value);
  };
  const saveEditedComm = () => {
    editComment(newEditComm);
    setBool(false);
    setBool2(true);
    getComment(params.id);
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: " column" }}>
        {comments
          ? comments
              .sort((a, b) => b.timeSeconds - a.timeSeconds)
              .map((item) => (
                <div key={item.id}>
                  <div className="comments-block">
                    <div className="who-is">
                      <img
                        style={{ width: "30px", borderRadius: "50%" }}
                        src={
                          item.photoURL
                            ? item.photoURL
                            : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        alt=""
                      />
                      <p className="disp-name" style={{ color: "black" }}>
                        {item.displayName ? item.displayName : item.owner}
                      </p>
                    </div>
                    <span className="date-comm" style={{ color: "black" }}>
                      Создано в {item.time}, {timeSince(item.timeSeconds)} назад{" "}
                    </span>

                    {bool && checkid === item.id ? (
                      <>
                        <div className="input-div edit-comm ">
                          <strong
                            className="input-name"
                            style={{ color: "black" }}
                          >
                            {item.displayName !== null
                              ? item.displayName
                              : item.owner}
                          </strong>
                          <textarea
                            rows="2"
                            className="input-box edit-comm-box"
                            type="text"
                            placeholder="Type your reply here."
                            component="input"
                            value={newEditComm}
                            onChange={changeEditedComm}
                          ></textarea>
                        </div>
                        <Button
                          color="success"
                          onClick={() => saveEditedComm()}
                        >
                          Save
                        </Button>
                      </>
                    ) : (
                      <p className="comment-text" style={{ color: "black" }}>
                        {item.text}
                      </p>
                    )}
                    {user ? (
                      item.owner === user.username ? (
                        bool2 ? (
                          <>
                            <Button
                              onClick={() => {
                                setNewEditComm(item.text);
                                getCommentById(item.id);
                                editComm(item.id);
                                setBool2(false);
                              }}
                            >
                              Edit comment
                            </Button>
                            <Button
                              color="error"
                              onClick={() => {
                                deleteCommentTemp(item.id, item.productId);
                              }}
                            >
                              Delete comment
                            </Button>
                          </>
                        ) : (
                          <></>
                        )
                      ) : (
                        <></>
                      )
                    ) : null}
                  </div>
                </div>
              ))
          : null}
        {user ? (
          <>
            <div className="comments-block">
              <form>
                <div className="form">
                  <div className="row">
                    <div className="row">
                      <div className="input-div">
                        <span className="input-name">
                          {user.displayName !== null ? user.displayName : null}
                        </span>
                        {bool2 ? (
                          <textarea
                            rows="2"
                            className="input-box"
                            type="text"
                            value={val}
                            placeholder="Leave comment"
                            component="input"
                            onChange={handleChangeEdit}
                          ></textarea>
                        ) : (
                          <textarea
                            readOnly
                            rows="2"
                            className="input-box"
                            type="text"
                            component="input"
                            value={val}
                            onChange={handleChangeEdit}
                          ></textarea>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="btn-div">
                    <Button
                      variant="contained"
                      className="post-btn"
                      onClick={creatingComment}
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <Link to="/auth">
            <div>
              <h5 className="login-to">Sign in to leave a comment</h5>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Comments;
