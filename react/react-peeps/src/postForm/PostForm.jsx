import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

// 오 왜 public/css/reset.css가 자동으로 적용되지?
// Header
const HeaderPostForm = styled.header`
  width: 100%;
  height: 51px;
  top: 0;
  padding: 0 16px;
  text-align: center;
  line-height: 51px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ebebeb;
`;
// Select
const SelectDiv = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  line-height: 45px;
  font-size: 15px;
  border-bottom: 1px solid #ebebeb;
`;
// Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 배경을 흐리게 처리하기 위한 색상 */
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  & > p {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 4px 0;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 11px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  & > p {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
`;
const ModalList = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
  border-bottom: 1px solid #aaa;
  width: 100%;
  & > li {
    font-size: 16px;
    margin-bottom: 12px;
  }
  & > li:last-child {
    margin-bottom: 24px;
  }
`;
// 제목 Input
const InputTitleContainer = styled.div`
  width: 100%;
  padding: 13px 16px;
  border-bottom: 1px solid #ebebeb;
`;
const InputTitle = styled.input`
  border: none;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  &::placeholder {
    color: #a7a7a7;
  }
  &:focus {
    outline: none;
  }
`;
// 이미지 Icon
const IconContainer = styled.div`
  width: 100%;
  padding: 4px 16px;
  border-bottom: 1px solid #ebebeb;
`;
const IconEachContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 39px;
  min-height: 39px;
  padding-top: 5px;
`;
const SelectImageButton = styled.input`
  display: none;
`;
// Textarea 내용입력
const ContentTextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 15px 16px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  resize: none;
  &::placeholder {
    color: #b2b2b2;
  }
  &:focus {
    outline: none;
  }
`;
// image show ul, li
const ImagesUl = styled.ul`
  display: flex;
  gap: 15px;
  padding: 15px 16px;
  list-style: none;
  margin: 0;
  width: 100%;
`;
const ImageImg = styled.img`
  border-radius: 4px;
  max-width: 100px;
  max-height: 80px;
`;
// Button & ButtonBox
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 18px 16px 14px 16px;
  width: 100%;
  bottom: 0;
`;
const ButtonCancel = styled.button`
  display: block;
  height: 40px;
  margin: 0 5px;
  background-color: #f5f6f8;
  color: #676767;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  text-align: center;
  width: 50%;
`;
const ButtonSubmit = styled(ButtonCancel)`
  background-color: #e8f8eb;
  color: #009f47;
`;

const PostForm = () => {
  const [showImage, setShowImage] = useState(false);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "카테고리를 선택해주세요.",
    title: "",
    content: "",
  });
  const modalRef = useRef(null);

  const handleInputFileChange = (e) => {
    const imagesArray = e.target.files;

    setShowImage(true);
    setImages([...imagesArray]);
  };
  const handleModalOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.innerText });
    setIsModalOpen(false);
  };
  const onChangeFormData = (e) => {
    if (e.target.name === "content" && e.target.value.length > 255) {
      return;
    }
    const nextForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(nextForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://localhost:9999/test-posts";
    const imageData = new FormData();
    imageData.append("image", images);
    formData["formData"] = imageData;

    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      alert("게시글 작성에 성공했습니다.");
    } catch (error) {
      alert("게시글 작성에 실패했습니다.");
      console.log(error);
    }
  };

  // 아 카테고리 바꿀 때 value에 category 넣어놓고 onchange 같은 거 됐을 때 value 바꿔주면 나중에 FormData() 할 때 한 번에 이 값으로 가져와 지겠구나!
  return (
    <>
      <HeaderPostForm>게시글 작성</HeaderPostForm>
      <div>
        <SelectDiv>
          <div onClick={handleModalOpenClose} name="category">
            {formData.category}
          </div>
        </SelectDiv>
        {isModalOpen && (
          <ModalOverlay>
            <ModalContent ref={modalRef}>
              <ModalHeader>
                <p>카테고리 선택</p>
              </ModalHeader>
              <ModalList>
                {/* 추후에 map으로 변경 */}
                <li onClick={handleCategoryChange}>일상</li>
                <li onClick={handleCategoryChange}>정보공유</li>
                <li onClick={handleCategoryChange}>내새꾸 자랑</li>
              </ModalList>
              <p onClick={handleModalOpenClose}>닫기</p>
            </ModalContent>
          </ModalOverlay>
        )}
        <InputTitleContainer>
          <InputTitle
            type="text"
            placeholder="제목"
            name="title"
            value={formData.title}
            onChange={onChangeFormData}
          />
        </InputTitleContainer>
      </div>
      <div>
        <IconContainer>
          <IconEachContainer>
            <label htmlFor="image-upload-button">
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14.1901M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8482 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5865L15.7901 12.4679C16.4651 11.9279 17.4053 11.8856 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5302L20 14.1901M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"
                    stroke="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </label>
            <SelectImageButton
              type="file"
              id="image-upload-button"
              name="image-upload-button"
              onChange={handleInputFileChange}
              accept="image/*"
              multiple
            />
          </IconEachContainer>
        </IconContainer>
      </div>
      <ContentTextArea
        id=""
        name="content"
        cols="25"
        rows="10"
        placeholder="내용을 입력하세요."
        value={formData.content}
        onChange={onChangeFormData}
        maxlength="255"
      ></ContentTextArea>
      <div className="images-preview">
        <ImagesUl>
          {showImage &&
            images.map((image) => {
              return (
                <li key={image.name + image.size}>
                  <ImageImg src={URL.createObjectURL(image)} alt={image.name} />
                </li>
              );
            })}
        </ImagesUl>
      </div>
      <ButtonBox>
        <ButtonCancel>취소</ButtonCancel>
        <ButtonSubmit type="submit" className="submit" onClick={handleSubmit}>
          등록
        </ButtonSubmit>
      </ButtonBox>
    </>
  );
};

export default PostForm;

/**
 * 필요한 데이터
 * postId - 얘는 아닌 거 같은데? 아직 등록도 안했는데 있을리가 없자너~
 * userID
 * category
 * title
 * content
 * images
 * createAt
 */
