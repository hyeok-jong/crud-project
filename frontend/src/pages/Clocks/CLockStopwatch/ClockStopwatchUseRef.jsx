import { useEffect, useState, useRef } from "react";

function StopwatchUseRef() {
  const [diff, setDiff] = useState(0); // 경과 시간을 상태로 관리
  const startTime = useRef(0); // 시작 시간을 저장할 Ref
  const isRunning = useRef(false); // 스톱워치 실행 여부를 저장할 Ref
  const timerInterval = useRef(null); // setInterval ID를 저장할 Ref

  const totalSeconds = Math.floor(diff / 1000); // 총 경과 시간을 초 단위로 계산
  const hour = Math.floor(totalSeconds / 3600); // 시간 계산
  const min = Math.floor((totalSeconds % 3600) / 60); // 분 계산
  const sec = totalSeconds % 60; // 초 계산

  const start = () => {
    if (!isRunning.current) {
      // 스톱워치가 실행 중이 아닐 때만 시작
      isRunning.current = true; // 실행 상태로 변경
      startTime.current = new Date().getTime() - diff; // 현재 시간에서 이미 경과한 시간을 빼서 시작 시간 계산
      timerInterval.current = setInterval(() => {
        setDiff(new Date().getTime() - startTime.current); // 매 1초마다 경과 시간 업데이트
      }, 1000);
    }
  };

  const end = () => {
    if (isRunning.current) {
      // 실행 중일 때만 중지
      isRunning.current = false; // 실행 상태 해제
      clearInterval(timerInterval.current); // setInterval 중지
      setDiff(new Date().getTime() - startTime.current); // 최종 경과 시간 계산
    }
  };

  const reset = () => {
    isRunning.current = false; // 실행 상태 해제
    clearInterval(timerInterval.current); // setInterval 초기화
    startTime.current = 0; // 시작 시간 초기화
    setDiff(0); // 경과 시간 초기화
  };

  // 컴포넌트가 언마운트 될 때 setInterval 정리 (메모리 누수 방지)
  useEffect(() => {
    return () => {
      clearInterval(timerInterval.current);
    };
  }, []);

  return (
    <>
      <h1>This is Stopwatch with useRef page</h1>
      <li>useRef</li>
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

export default StopwatchUseRef;
