import React, { useCallback, useReducer, useRef, useState } from 'react';
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

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(5001);

  const onInsert = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo: newTodo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
