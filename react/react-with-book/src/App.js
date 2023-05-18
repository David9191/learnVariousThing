import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './todoApp/TodoTemplate';
import TodoInsert from './todoApp/TodoInsert';
import TodoList from './todoApp/TodoList';

function createBulkTodos() {
  const array = [];
  for (let index = 1; index <= 5000; index++) {
    array.push({
      id: index,
      text: `할 일${index}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(5001);

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

  // const onRemove = useCallback(
  //   (id) => {
  //     const newTodos = todos.filter((todo) => todo.id !== id);
  //     setTodos(newTodos);
  //   },
  //   [todos],
  // );
  // 최신 todos의 상태를 받기 위해 의존성 배열에 todos를 넣어줬다.

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) => {
  //         return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
  //       }),
  //     );
  //   },
  //   [todos],
  // );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
