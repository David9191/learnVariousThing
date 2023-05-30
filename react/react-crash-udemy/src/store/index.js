import { legacy_createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INCREASE = "increase";
export const TOGGLE = "toggle";

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
