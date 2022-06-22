import React from "react";
import { Image, Col, Row, Form, Button } from "react-bootstrap";
import comment1 from "../../img/singleBlog/comment1.jpg";
const Comment = ({ comment, handleSubmit }) => {
  const { body, username, createdAt, children, parentId, avatar } = comment;
  const [showReplyForm, setShowReplyForm] = React.useState(false);
  const [textareaValue, setTextareaValue] = React.useState("");

  return (
    <Col
      xs={12}
      className={`user-comment ${parentId === null ? "mt-5" : "mt-1"}`}
    >
      <div className="p-3 d-flex aling-items-start gap-3">
        <Image
          src={window.location.origin + avatar}
          alt="img-comment"
          className="img-comment rounded-circle "
        ></Image>
        <div className="detail-user-comment w-100">
          <div className="d-flex aling-items-center  justify-content-start gap-3 ">
            <h4 className="text-uppercase fw-bold">{username}</h4>
            <span className="date-post">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="text-comment">{body}</div>
          <div className="reply-section">
            <span
              className="reply d-inline-block text-capitalize mt-2"
              onClick={() => setShowReplyForm(true)}
            >
              reply
            </span>
            {showReplyForm && (
              <div className="form-container">
                <Form
                  onSubmit={(e) =>
                    handleSubmit(
                      e,
                      comment,
                      textareaValue,
                      setShowReplyForm,
                      setTextareaValue
                    )
                  }
                  className="mt-1"
                >
                  <Form.Group
                    className="mb-1 reply-textarea"
                    controlId="form.Textarea"
                  >
                    <Form.Control
                      name="textComment"
                      value={textareaValue}
                      onChange={(e) => setTextareaValue(e.target.value)}
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                  <button
                    type="submit"
                    className="reply border-0 bg-transparent"
                    variant="none"
                  >
                    reply
                  </button>
                  <button
                    className="reply ms-3 border-0 bg-transparent"
                    variant="none"
                    onClick={() => setShowReplyForm(false)}
                  >
                    cancel
                  </button>
                </Form>
              </div>
            )}
          </div>

          <Row className="g-0 ">
            {children.length > 0 &&
              children.map((reply) => {
                return (
                  <Comment
                    key={reply.id}
                    comment={reply}
                    handleSubmit={handleSubmit}
                  />
                );
              })}
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Comment;
