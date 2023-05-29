const redux = require("redux");

// 항상 2개의 파라미터를 받을 거다. 기존의 상태와 발송된 액션
// 항상 새로운 스테이트의 객체를 반환해야 한다.(대부분의 경우. 숫자, 문자열일수도 있음)
// 순수함수여야 한다.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// 어떤 리듀서가 이 저장소를 변경하는지 저장소가 알아야 해서 넣어줌
const store = redux.legacy_createStore(counterReducer);

// 최신 상태 보장. 스테이트 변경 때마다 실행
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
