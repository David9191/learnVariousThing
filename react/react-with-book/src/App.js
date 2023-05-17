import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPracticeCopy from './EventPracticeCopy';
import EventPractice from './EventPractice';
import ScrollBox from './ScrollBox'; // 얘는 App을 class로 바꿔줘야함.
import IterationSample from './IterationSample';

const App = () => {
  return (
    <div>
      {/* <MyComponent favoriteNumber={5}>React</MyComponent> */}
      {/* <Counter /> */}
      {/* <Say /> */}
      {/* <EventPractice />
      <EventPracticeCopy /> */}
      <IterationSample />
    </div>
  );
};

export default App;
