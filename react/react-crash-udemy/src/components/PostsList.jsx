import { styled } from "styled-components";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostUl = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const PostList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const showModalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={showModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <PostUl style={{ padding: "0" }}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </PostUl>
    </>
  );
};

export default PostList;
