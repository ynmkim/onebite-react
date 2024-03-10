import SearchForm from './SearchForm';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <h2 className="title">List</h2>
      <SearchForm />
      <ul className="todo-list">
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
