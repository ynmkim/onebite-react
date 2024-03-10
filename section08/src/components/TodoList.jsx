import SearchForm from './SearchForm';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list-container">
      <h2 className="title">List</h2>
      <SearchForm />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
