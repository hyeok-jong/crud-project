import { useState, useRef, useEffect } from "react";
import './ClockCountDown.css';



function CountDown() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const [isShaking, setIsShaking] = useState(false);

  function handleHour(isAdd) {
    if (isAdd) {
      setHour((prev) => (prev + 1));
      setTime((prev) => (prev + 60*60))
    } else {
      setHour((prev) => (prev - 1));
      setTime((prev) => (prev - 60*60))
    }
  }
  function handleMinute(isAdd) {
    if (isAdd) {
      setMinute((prev) => (prev + 1));
      setTime((prev) => (prev + 60))
    } else {
      setMinute((prev) => (prev - 1));
      setTime((prev) => (prev - 60))
    }
  }
  function handleSecond(isAdd) {
    if (isAdd) {
      setSecond((prev) => (prev + 1));
      setTime((prev) => (prev + 1))
    } else {
      setSecond((prev) => (prev - 1));
      setTime((prev) => (prev - 1))
    }
  }


  function start() {
    setIsRunning(true);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIsShaking(false);
  }
  function pause() {
    setIsRunning(false);
    setIsShaking(false);
  }
  function reset() {
    setIsRunning(false);
    setTime(0);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIsShaking(false);
  }

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
  
    return `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")} : ${String(s).padStart(2, "0")}`;
  }
  


  useEffect(() => {
    let intervalId;

    if (time < 0) {
      setTime(0);
      setHour(0);
      setMinute(0);
      setSecond(0);
    }

    if (isRunning && time === 0) {
      console.log('done');
      setIsRunning(false);
      setTime(0);
      setHour(0);
      setMinute(0);
      setSecond(0);
      setIsShaking(true);
    }

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev - 1); // 1초마다 time 증가
      }, 1000);
    }
    
    // Cleanup 함수
    return () => {
      clearInterval(intervalId); // 타이머 정리
    };
    ;
  }, [isRunning, time]); // isRunning 상태 변경 시 실행


  return(
    <>
      <h1>This is CountDown page</h1>
      <li>useState</li>
      <div className={isShaking ? 'shaking number': 'number'}>{formatTime(time)}</div>
      <input time='number' value = {hour} readOnly/>
      <input time='number' value = {minute} readOnly/>
      <input time='number' value = {second} readOnly/>
      <div>
        <button className="add-hour" onClick = {() => handleHour(true)}>+ 1 hour</button>
        <button className="add-minute" onClick = {() => handleMinute(true)}>+ 1 minute</button>
        <button className="add-second" onClick = {() => handleSecond(true)}>+ 1 second</button>
      </div>
      <div>
        <button className="minus-hour" onClick = {() => handleHour(false)}>- 1 hour</button>
        <button className="minus-minute" onClick = {() => handleMinute(false)}>- 1 minute</button>
        <button className="minus-second" onClick = {() => handleSecond(false)}>- 1 second</button>
      </div>
      <div>
        <button className="start" onClick = {start}>start</button>
        <button className="pause" onClick = {pause}>pause</button>
        <button className="reset" onClick = {reset}>reset</button>
      </div>
    </>
  );
}

export default CountDown;