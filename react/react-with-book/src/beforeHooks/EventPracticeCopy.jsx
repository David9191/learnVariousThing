import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  // 함수를 화살표 함수로 하면 this bind가 필요없음.
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // input value === state name 으로 해줘서 state가 바뀌게 만듦.
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // 얘가 한 박자 늦게 나오는 거는 setState가 비동기로 이루어지기 때문.
    console.log(this.state.message);
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="name"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="anything"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>Clear</button>
      </div>
    );
  }
}

export default EventPractice;
