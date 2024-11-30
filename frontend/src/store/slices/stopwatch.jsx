import { createSlice } from "@reduxjs/toolkit";

const stopWatchSlice = createSlice({
  name: "stopwatch",
  initialState: { startTime: 0, isRunning: false, diff: 0 },
  reducers: {
    start(state) {
      if (!state.isRunning) {
        state.isRunning = true;
        state.startTime = new Date().getTime() - state.diff; // 이전 경과 시간 보정
      }
    },
    end(state) {
      if (state.isRunning) {
        state.isRunning = false;
        state.diff = new Date().getTime() - state.startTime; // 최종 경과 시간 저장
      }
    },
    reset(state) {
      state.isRunning = false;
      state.startTime = 0;
      state.diff = 0; // 초기화
    },
    render(state) {
      if (state.isRunning) {
        state.diff = new Date().getTime() - state.startTime;
      }
    },
  },
});

export default stopWatchSlice;
