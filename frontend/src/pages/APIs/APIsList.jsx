import { Link } from "react-router-dom";
import './APIsList.css';

function APIsList() {
  return (
    <>
      <div className="container">
        <h1>This is APIsList page</h1>
        <li>This is APIsList.jsx</li>
        <li>In App.jsx these pages are set ad '/apis/*'</li>
        <li>Then there are routes in APIsRoutes.jsx</li>
        <li>And this APIsList.jsx is just source route('/') for APIsRoutes.jsx</li>
        <li>That is this page is just showing sub links like Nav and the actual routes settings are on APIsRoutes.jsx which is component but no contents.</li>
        
        <ul><Link to='/apis/catpromise' className='link'>Cat Promise</Link></ul>
        <ul><Link to='/apis/catasyncawait' className='link'>Cat Async Await</Link></ul>
      </div>
    </>
  );
}

export default APIsList;