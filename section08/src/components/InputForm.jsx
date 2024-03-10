import './InputForm.css';

const InputForm = () => {
  // todo : modal ui로 바꿔보기
  return (
    <form className="input-form">
      <input placeholder="할일 입력" />
      <button type="button">할일 추가</button>
    </form>
  );
};

export default InputForm;
