import React from "react";
import styled from "styled-components";

const category = [
  {
    name: "all",
    text: "전체",
  },
  {
    name: "daily",
    text: "일상",
  },
  {
    name: "infoShare",
    text: "정보공유",
  },
  {
    name: "myPet",
    text: "내새꾸 자랑",
  },
];
const categoryHeight = "50px";

const CategoryBlock = styled.div`
  display: flex;
  height: ${categoryHeight};
  justify-content: start;
  gap: 22px;
  padding: 0 16px;
  border-bottom: 1px solid #e6e6e6;
`;
const CategoryName = styled.div`
  font-size: 16px;
  height: calc(100% - 1px);
  line-height: ${categoryHeight};
  &:hover {
    border-bottom: 2px solid #000;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Category = () => {
  return (
    <CategoryBlock>
      {category.map((category, index) => {
        return (
          <CategoryName
            name={category.name}
            key={category.name + category.text + index}
          >
            {category.text}
          </CategoryName>
        );
      })}
    </CategoryBlock>
  );
};

export default Category;
