import { styled } from "styled-components";

const NewPostForm = styled.form`
  background-color: #6233b9;
  padding: 1rem;
  width: 20rem;
`;
const NewPostFormLabel = styled.label`
  display: block;
  margin-bottom: 0.05rem;
  color: #eadbfb;
  font-weight: bold;
`;

const NewPost = ({ onBodyChange, onAuthorChange }) => {
  return (
    <NewPostForm>
      <p>
        <NewPostFormLabel htmlFor="body">Text</NewPostFormLabel>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <NewPostFormLabel htmlFor="name">Your name</NewPostFormLabel>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </NewPostForm>
  );
};

export default NewPost;
