import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          // onClick={() => {
          //   this.setState(prevState => {
          //     return {
          //       number: prevState.number + 1,
          //     };
          //   });
          // }}
          // 화살표에서 객체를 바로 반환하고 싶을 때 ()로 묶어주면 된다. => a + b랑 똑같다.
          // onClick={() => {
          //   this.setState(prevState => ({
          //     number: prevState.number + 1,
          //   }));
          // }}
          // this.setState가 끝난 후 특정 작업 실행하기
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("good");
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
