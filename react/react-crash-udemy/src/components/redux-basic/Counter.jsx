import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { INCREMENT } from "../../store/index";

const CounterBlock = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;

const H1 = styled.h1`
  text-transform: uppercase;
  color: #575757;
  margin: 0;
  font-size: 1rem;
`;

const Value = styled.div`
  font-size: 2rem;
  color: #3c0080;
  margin: 2rem 0;
  font-weight: bold;
`;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      amount: 5,
    });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <CounterBlock>
      <H1>Redux Counter</H1>
      {showCounter && <Value>{counter}</Value>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </CounterBlock>
  );
};

export default Counter;
