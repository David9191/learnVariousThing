import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
    console.log(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyDown = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <input type="text" />
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange} />
      <input
        type="text"
        name="message"
        placeholder="anything"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>Clear</button>
    </div>
  );
};

export default EventPractice;
