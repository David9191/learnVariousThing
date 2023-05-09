import React, { useState } from "react";

const getRandomNumber = n => {
  let array = [];

  for (let index = 0; index < n; index++) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;

    while (array.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 9) + 1;
    }
    array = [...array, randomNumber];
  }
  return array.join("");
};

const compareNumber = (answer, inputValue) => {
  const result = { strike: 0, ball: 0 };

  for (let i = 0; i < answer.length; i++) {
    for (let k = 0; k < answer.length; k++) {
      if (answer[i] === inputValue[k] && i === k) {
        result.strike++;
        break;
      } else if (answer[i] === inputValue[k] && i !== k) {
        result["ball"]++;
        break;
      }
    }
  }
  // console.log("compareNumber : ", result);
  return result;
};

const setNewArray = (array, inputValue, result) => {
  const newArray = [...array, { inputValue, result }];

  return newArray;
};

const NumberBaseball = () => {
  const n = 4;
  const [answer, setAnswer] = useState(getRandomNumber(n));
  const [result, setResult] = useState({ strike: 0, ball: 0 });
  const [beforeAnswer, setBeforeAnswer] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => setInputValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newResult = compareNumber(answer, inputValue);
    setResult(newResult);
    setBeforeAnswer(setNewArray(beforeAnswer, inputValue, newResult));

    if (newResult.strike === answer.length) {
      alert(`${inputValue} 정답입니다!`);
      setAnswer(getRandomNumber(n));
      setResult({ strike: 0, ball: 0 });
      setBeforeAnswer([]);
      setInputValue("");
      return;
    }
  };

  return (
    <>
      <div>
        {result.strike}strike {result.ball}ball
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          minLength={answer.length}
          maxLength={answer.length}
        />
        <button type="submit">정답</button>
      </form>
      <ol>
        {beforeAnswer.map((beforeAnswer, index) => {
          return (
            <li key={"beforeAnswer" + beforeAnswer.strike + index}>
              {beforeAnswer.inputValue}
              <div>
                {beforeAnswer.result.strike}strike. {beforeAnswer.result.ball}ball.
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default NumberBaseball;
