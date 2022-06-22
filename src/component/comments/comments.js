import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../../component/comments/comment";
import avatar from "../../img/singleBlog/comment2.jpg";
import { v4 as uuidv4 } from "uuid";
import { allState, handleReplyComment } from "../../features/shopSlice";
import { postComment } from "../../features/shopSlice";
import { Row } from "react-bootstrap";
const Comments = () => {
  const dispatch = useDispatch();
  const state = useSelector(allState);

  const handleSubmit = (
    e,
    comment,
    textareaValue,
    setShowReplyForm,
    setTextareaValue
  ) => {
    e.preventDefault();
    const newComment = {
      id: uuidv4(),
      body: `${textareaValue}`,
      username: "mendy",
      userId: "2",
      parentId: `${comment.id}`,
      children: [],
      avatar: `${avatar}`,
      createdAt: new Date().toISOString(),
    };

    dispatch(handleReplyComment(newComment));
    setShowReplyForm(false);
    setTextareaValue("");
    dispatch(postComment(newComment));
  };
  return (
    <Row>
      {state.comments.length > 0 &&
        state.comments.map((userComment) => {
          return (
            <Comment
              key={userComment.id}
              comment={userComment}
              handleSubmit={handleSubmit}
            />
          );
        })}
    </Row>
  );
};

export default Comments;
