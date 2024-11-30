import { useEffect, useState } from "react";
import './ClockCurrentTime.css';

function CurrentTime() {
  // 상태로 현재 시간과 타이머 실행 상태 저장
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false); // 타이머 실행 상태

  useEffect(() => {
    let interval;
    if (isRunning) {
      // 타이머가 실행 중일 때만 interval 설정
      interval = setInterval(() => {
        setTime(new Date()); // 새로운 시간 객체로 상태 업데이트
      }, 10);
    }

    // 컴포넌트 언마운트 또는 isRunning 변경 시 interval 정리
    return () => clearInterval(interval);
  }, [isRunning]); // isRunning 상태 변경 시 효과 다시 실행

  // 두 자리 숫자로 변환 함수
  const formatTwoDigits = (num) => String(num).padStart(2, '0');

  return (
    <>
      <h1>This is CurrentTime page</h1>
      <li>useState</li>
      <div className="time-container">
        {/* on/off 버튼 */}
        <button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        {/* 두 자리로 표시된 시간, 분, 초 + 밀리초 표시 */}
        <div>{formatTwoDigits(time.getHours())}</div>
        <div>{formatTwoDigits(time.getMinutes())}</div>
        <div>{formatTwoDigits(time.getSeconds())}</div>
        <div>{formatTwoDigits(Math.floor(time.getMilliseconds() / 10))}</div> {/* 소수점 아래 2자리로 밀리초 표시 */}
      </div>
    </>
  );
}

export default CurrentTime;
