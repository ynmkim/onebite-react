import { useRef, useState } from 'react';
import './InputForm.css';

/* TODO: modal ui로 바꿔보기 */
const InputForm = ({ onCreate }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(value);
    setValue('');
  };

  /* MEMO: form의 기본 이벤트로 등록되어 있어서 중복됨.
  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      submitHandler()
    }
  }
  */

  return (
    <form className="input-form" onSubmit={submitHandler}>
      <input placeholder="할일 입력" value={value} onChange={changeHandler} ref={inputRef} />
      <button type="submit">할일 추가</button>
    </form>
  );
};

export default InputForm;
