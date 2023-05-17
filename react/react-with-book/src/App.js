import { useState } from 'react';
import './App.css';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';
import Average from './Hooks/Average';

const App = () => {
  return (
    <>
      <Counter />
      <br />
      <Info />
      <br />
      <Average />
    </>
  );
};

export default App;
