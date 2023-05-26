import { styled } from "styled-components";

const PostLi = styled.li`
  min-width: 250px;
  background-color: #d486fb;
  color: #4f0b80;
  list-style: none;
  border-radius: 10px;
  text-align: start;
  padding-left: 20px;
  & > p.post-author {
    font-size: 16px;
    font-weight: bold;
    padding-top: 6px;
  }
  & > p.post-body {
    font-size: 18px;
    font-style: italic;
    padding-bottom: 6px;
  }
`;

const Post = ({ author, body }) => {
  return (
    <PostLi>
      <p className="post-author">{author}</p>
      <p className="post-body">{body}</p>
    </PostLi>
  );
};

export default Post;
