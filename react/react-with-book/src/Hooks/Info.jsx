import React, { useReducer } from 'react';
import useInputs from './userInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} type="text" />
        <input name="nickname" value={nickname} onChange={onChange} type="text" />
      </div>
      <div>
        <div>
          <b>Name: </b>
          {name}
        </div>
        <div>
          <b>Nickname: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
