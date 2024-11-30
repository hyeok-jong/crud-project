import { useSelector } from 'react-redux';
import './Main.css';

function Main() {

  const todoList = useSelector((state) => (state.todo.todoList));

  return (
    <div className="main-container">
      <h1>This is main page</h1>
      <li>CreateRoot on index.jsx.</li>
      <li>In index.jsx there are settings of Provider for react-redux and BrowserRouter for Routes</li>
      <li>In App.jsx there are routes for all subpages. This main page is one of them.</li>
      <li>This main page is just react component.</li>
      <h2>There are descriptions for each page.</h2>
      <h2>This is custom project for Frontend and Backend</h2>
      
      <h3>Frontend features</h3>
      <li>React.js</li>
      <li>components</li>
      <li>useState, useRef, useEffect</li>
      <li>react-redux(reductjs-toolkit) (store-slice structure)</li>
      <li>Routes</li>
      <li>Call API with fetch (then, async and await)</li>

      <h3>Backend features</h3>
      <li>Express.js</li>
      <li>Router</li>
      <li>Middlewares including notFound and errorHandler</li>
      <li>Four types of request</li>

      <MainTodoList todoList = {todoList}/>

    </div>
  );
}

export default Main;




function MainTodoList({todoList}) {
  return (
    <div className="main-todolist-container">
      <h2>using react-redux get to do lists from TODO component</h2>
      {todoList.map((todo, _) => (
        <div className = 'todo' key={todo.id}>
          <div>{todo.id} : {todo.item}</div>
        </div>
      ))}
    </div>
  );
}