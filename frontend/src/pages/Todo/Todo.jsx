import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import todoSlice from "../../store/slices/todos";
import styles from './Todo.module.css';

function Todo() {
  const [currentText, setCurrentText] = useState('');
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  function followText(event) {
    setCurrentText(event.target.value);
  }

  function updateItem() {
    dispatch(
      todoSlice.actions.addItem({
        id: todoList.length + 1,
        item: currentText,
      })
    );
    setCurrentText(''); // 입력창 초기화
  }

  function removeItem(id) {
    dispatch(todoSlice.actions.removeItem(id));
  }
  
  function resetItems() {
    dispatch(todoSlice.actions.resetItems());
  }
  return (
    <div className="Todo">
      <h1>This is Todo pages</h1>
      <li>useState, useDispatch and useSelector</li>
      <li>localStorage</li>
      <div className={styles.container}>
        <input type = 'text' value = {currentText} onChange={followText} placeholder="type todo item and press 'Add' button"/>
        <button onClick = {updateItem}>+</button>
        <button className='reset' onClick = {resetItems}>Reset</button>
      </div>

      <div className={styles.todoContainer}>
        {todoList.map((todo, _) => (
          <div className = {styles.todo} key={todo.id}>
            <div>{todo.id} : {todo.item}</div>
            <button onClick = {() => removeItem(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Todo;