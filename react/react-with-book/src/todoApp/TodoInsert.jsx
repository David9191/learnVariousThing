import React, { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value.length === 0) return;
      onInsert(value);
      setValue('');
      inputRef.current.focus();
    },
    [onInsert, value],
    // 이 부분 테스트 해보기 onInsert를 안써주면 계속 text값이 고정으로 되는지
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} ref={inputRef} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
