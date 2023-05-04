import React, { useState } from "react";

const WordReplay = () => {
  const [previousWord, setPreviousWord] = useState("지돌이");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("과연?");
  const [count, setCount] = useState(0);

  const handleChange = event => setInputValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    // if (previousWord.slice(-1) === inputValue.slice(0, 1)) {
    if (previousWord[previousWord.length - 1] === inputValue[0]) {
      setResult(`[${inputValue}] 정답! 다음 문제도 가능할까~?`);
      setPreviousWord(inputValue);
      setCount(count => count + 1);
    } else {
      setResult(`${inputValue} 땡! 다시~`);
    }
    setInputValue("");
  };

  return (
    <>
      <h1>끝말잇기</h1>
      <h3>{previousWord}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">제출</button>
        <h4>{result}</h4>
        <h4>맞은 개수 : {count}</h4>
      </form>
    </>
  );
};

export default WordReplay;
