import { Link } from "react-router-dom";




function ClocksList() {
  return(
    <>
      <h1>This is Clocks list page</h1>
      <li>For explanation of sub-links and routes go to Try API page</li>
      <div className="link-container">
        <ul><Link to='/clocks/clock' className='link'>Clock</Link></ul>
        <ul><Link to='/clocks/stopwatch' className='link'>Stopwatch</Link></ul>
        <ul><Link to='/clocks/stopwatchuseeffect' className='link'>Stopwatch with useRef</Link></ul>
        <ul><Link to='/clocks/countdown' className='link'>Countdown</Link></ul>
      </div>
    </>
  );
}

export default ClocksList;