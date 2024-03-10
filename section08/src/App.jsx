import './App.css';
import InputForm from './components/InputForm';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
