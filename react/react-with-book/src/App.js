import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './todoApp/TodoTemplate';
import TodoInsert from './todoApp/TodoInsert';
import TodoList from './todoApp/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
        }),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
