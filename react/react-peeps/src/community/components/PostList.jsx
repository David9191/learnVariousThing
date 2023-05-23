import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostListBlock = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;
const PostFormLink = styled(Link)`
  position: fixed;
  text-decoration: none;
  padding: 10px;
  border: none;
  border-radius: 40px;
  background-color: #009f47;
  bottom: 15px;
  right: 15px;
  font-size: 26px;
  font-weight: bold;
  color: #e8f7eb;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 21px;
`;

// 데이터 조작은 부모에서 하자. 관심사 분리
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const postsUrl = "http://localhost:9999/posts";

  useEffect(() => {
    (async () => {
      const response = await axios.get(postsUrl);
      const data = response.data;
      setPosts([...posts, ...data]);
    })();
  }, []);

  return (
    <>
      {/* <Link> */}
      <PostListBlock>
        {posts.map((postData, index) => (
          <PostItem postData={postData} key={postData.postId + index} />
        ))}
      </PostListBlock>
      {/* </Link> */}
      <PostFormLink to="/posts/form">+</PostFormLink>
    </>
  );
};

export default React.memo(PostList);
