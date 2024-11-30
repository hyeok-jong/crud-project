import { useDispatch, useSelector } from "react-redux";
import stopWatchSlice from "../../../store/slices/stopwatch";
import { useEffect } from "react";

function Stopwatch() {
  const dispatch = useDispatch();
  const { startTime, isRunning, diff } = useSelector((state) => state.stopwatch);

  // useEffect로 타이머 주기적 업데이트
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(stopWatchSlice.actions.render());
      }, 1000); // 1초마다 상태 업데이트
    }
    return () => {
      clearInterval(timer); // 타이머 정리
    };
  }, [isRunning, dispatch]);

  function start() {
    dispatch(stopWatchSlice.actions.start());
  }

  function end() {
    dispatch(stopWatchSlice.actions.end());
  }

  function reset() {
    dispatch(stopWatchSlice.actions.reset());
  }

  // 경과 시간 계산
  const totalSeconds = Math.floor(diff / 1000);
  const hour = Math.floor(totalSeconds / 3600);
  const min = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;

  return (
    <>
      <h1>This is Stopwatch page</h1>
      <li>react-redux useDispatch and useSelector</li>
      <div className="stopwatch-container">
        <div className="stopwatch-time">
          {`${hour.toString().padStart(2, "0")}:${min
            .toString()
            .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`}
        </div>
        <div className="stopwatch-buttons">
          <button onClick={start}>Start</button>
          <button onClick={end}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
