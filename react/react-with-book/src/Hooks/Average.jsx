import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers) => {
  console.log('calculating..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    if (!parseInt(number)) {
      console.log('not a number');
      return;
    }
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} type="text" ref={inputEl} />
      <button onClick={onInsert}>Submit</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>Average:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
