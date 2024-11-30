import { Link } from "react-router-dom";
import './Nav.css';


function Nav() {
  return (
    <div className="nav-container">

      {/* Link is basically html a tag */}
      <Link to='./' className = 'nav-item'>Main page</Link>
      <Link to='./board' className = 'nav-item'>Boards</Link>
      <Link to='./apis' className = 'nav-item'>Try API</Link>
      <Link to='./clocks' className = 'nav-item'>Clocks</Link>
      <Link to='./todos' className = 'nav-item'>TO DO</Link>
    </div>
  );
}

export default Nav;