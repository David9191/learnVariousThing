import React, { useState } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(~~(Math.random() * 9));
  const [second, setSecond] = useState(~~(Math.random() * 9));
  const [inputValue, setInputValue] = useState();
  const [result, setResult] = useState('과연?');
  const [beforeResult, setBeforeResult] = useState();

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Number(inputValue) === first * second) {
      setResult(' 정답! 다음 문제로!');
      setFirst(~~(Math.random() * 10) + 1);
      setSecond(~~(Math.random() * 10) + 1);
    } else {
      setResult(' 땡!(나영석) 못 넘어가!');
    }
    setBeforeResult(inputValue);
    setInputValue('');
  };

  return (
    <>
      <h1>GuGuDan</h1>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button type="submit">맞추기!</button>
      </form>
      <p className="result">
        {beforeResult}
        {result}
      </p>
    </>
  );
};

export default GuGuDan;
