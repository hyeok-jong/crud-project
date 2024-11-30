
// 1. slice 등록
// 2. 모든 slice를 하나의 store로 합침


import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todos.jsx'; 
import stopwatchSlice from './slices/stopwatch.jsx'; 
import boardSlice from './slices/board.jsx';

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    stopwatch: stopwatchSlice.reducer,
    board: boardSlice.reducer,
  },
});

export default store;
