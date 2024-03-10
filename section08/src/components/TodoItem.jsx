import './TodoItem.css';

const TodoItem = () => {
  return (
    <li className="todo-item">
      <input type="checkbox" id="is-done" />
      <label htmlFor="is-done"></label>
      <span className="content">리액트 공부하기</span>
      <span className="date">date</span>
      <button type="button">삭제</button>
    </li>
  );
};

export default TodoItem;
