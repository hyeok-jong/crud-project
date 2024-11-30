import { Route, Routes } from "react-router-dom";
import ClocksList from "./ClocksList";
import CurrentTime from "./ClockCurrentTime/ClockCurrentTime";
import Stopwatch from "./CLockStopwatch/ClockStopwatch";
import StopwatchUseRef from "./CLockStopwatch/ClockStopwatchUseRef";
import CountDown from "./ClockCountDown/ClockCountDown";





function ClocksRoutes() {
  return(
    <>
    
      <Routes>
        <Route path='/' element={<ClocksList/>}></Route>
        <Route path='/clock' element={<CurrentTime/>}></Route>
        <Route path='/stopwatch' element={<Stopwatch/>}></Route>
        <Route path='/stopwatchuseeffect' element={<StopwatchUseRef/>}></Route>
        <Route path='/countdown' element={<CountDown/>}></Route>
      </Routes>
    </>
  );
}

export default ClocksRoutes;