import { Route, Routes } from "react-router-dom";
import APIsList from './APIsList.jsx';
import APICatPromise from './APICat/APICatPromise.jsx';
import APICatAsyncAwait from './APICat/APICatAsyncAwait.jsx';




function APIsRoutes() {
  return(
    <>
    
      <Routes>
        <Route path='/' element={<APIsList/>}></Route>
        <Route path='/catpromise' element={<APICatPromise/>}></Route>
        <Route path='/catasyncawait' element={<APICatAsyncAwait/>}></Route>
      </Routes>
    </>
  );
}

export default APIsRoutes;