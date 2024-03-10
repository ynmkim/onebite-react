import './TodoItem.css';

const TodoItem = ({ isDone, content, createdAt }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={isDone} readOnly />
      <span className="content">{content}</span>
      <span className="date">{new Date(createdAt).toLocaleDateString()}</span>
      <button type="button">삭제</button>
    </li>
  );
};

export default TodoItem;
