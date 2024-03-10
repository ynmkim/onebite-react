import './App.css';
import InputForm from './components/InputForm';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useRef, useState } from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부하기',
    createdAt: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '청소하기',
    createdAt: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      createdAt: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <InputForm onCreate={onCreate} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
