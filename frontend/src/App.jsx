import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './pages/Main/Main.jsx';
import APIsRoutes from './pages/APIs/APIsRoutes.jsx';
import ClocksRoutes from './pages/Clocks/ClocksRoutes.jsx';
import Todo from './pages/Todo/Todo.jsx';
import Board from './pages/Board/Board.jsx';




function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/apis/*' element={<APIsRoutes/>}/>
        <Route path='/clocks/*' element={<ClocksRoutes/>}/>
        <Route path='/todos' element={<Todo/>}/>
        <Route path='/board' element={<Board/>}/>
      </Routes>
    </div>
  )
}

export default App
