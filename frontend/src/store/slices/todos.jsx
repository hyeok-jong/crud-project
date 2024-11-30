import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialTodoList = [
  { id: 1, item: 'this is test item' },
  { id: 2, item: 'to remove these initial items press remove button' },
];

// 로컬 스토리지에서 데이터 복원 또는 기본 상태 사용
const savedTodoList = JSON.parse(localStorage.getItem('todo-list')) || initialTodoList;

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: savedTodoList, // 로컬 스토리지에서 복원된 데이터 사용
  },
  reducers: {
    addItem(state, action) {
      if (action.payload.item.trim() === '') {
        console.warn('Todo item is empty, skipping addition.');
      } else {
        state.todoList.push(action.payload);
        // 로컬 스토리지 업데이트
        localStorage.setItem('todo-list', JSON.stringify(state.todoList));
      }
    },
    removeItem(state, action) {
      let removedTodoList = state.todoList.filter((todo) => todo.id !== action.payload);
      removedTodoList = removedTodoList.map((todo, index) => ({ id: index + 1, item: todo.item }));
      state.todoList = removedTodoList;
      // 로컬 스토리지 업데이트
      localStorage.setItem('todo-list', JSON.stringify(state.todoList));
    },
    resetItems(state) {
      // 로컬 스토리지 초기화
      localStorage.removeItem('todo-list');
      // Redux 상태를 초기 상태로 되돌림
      state.todoList = initialTodoList;
    },
  },
});

// 리듀서를 기본 export
export default todoSlice;
