import { useState, useEffect } from "react";
import './Board.css';
const baseURL = 'http://localhost:8000/api/posts';


function Board() {


  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState(1);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editComponent, setEditComponent] = useState(null);
  const [editId, setEditId] = useState(null);



  async function getAllPosts() {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
    }
  }

  async function search() {
    try {
      const response = await fetch(baseURL+`/${searchId}`);
      const data = await response.json();
      setPosts([data]);
    } catch (error) {
    }
  }

  async function add() {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title, content: content})
      });
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }


  async function remove(id) {
    try {
      const response = await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      if (data.length <= 1) {
        setPosts([data])
      } else {
        setPosts(data);
      }
      getAllPosts();

    } catch (error) {
      console.log(error);

    }
  }

  function openEditComponent(id) {
    setEditComponent(<EditComponent props = {{getAllPosts: getAllPosts, id: id, setEditId: setEditId, setEditComponent: setEditComponent}}/>);
    setEditId(id);
  }


  useEffect(() => {
    getAllPosts();
  }, []);



  return (
    <div className="board-container">
      <h1>CRUD Project Dashboard</h1>
      <h2>API Server: Powered by Express.js</h2>
      <li>Call API by js fetch (async and await)</li>
      <li>First get data from API and using state, re-render UI</li>
      <li>Then, using redux send data to redux, so this page just send data to redux, not get</li>
      <li>So, the role of redux is just share the data globally.</li>


      <div className="search-container">
        <input className='search-field' type='number' value = {searchId} onChange={
          (event) => {setSearchId(event.target.value)}}/>
        <button onClick={search}>Search</button>
      </div>

      <div className="add-container">
        <input type='text' value = {title} placeholder='title' onChange={
          (event) => {setTitle(event.target.value)}}/>
        <input type='text' value = {content} placeholder='content' onChange={
          (event) => {setContent(event.target.value)}}/>
        <button onClick={add}>Add</button>
      </div>

      <div>
        <button onClick={getAllPosts}>Refresh</button>
        <div className="posts-container">
          {posts.map((post) => {
            return (
            <div key={post.id} className="post-container">
              <div className="post-id">{post.id}</div>
              <div className="post-title">{post.title}</div>
              <div className="post-content">{post.content}</div>
              <button className="delete-button" onClick = {() => remove(post.id)}>Delete</button>
              <button className="edit-button" onClick = {() => (openEditComponent(post.id))}>{(editComponent && post.id == editId) ? 'On Editing' : 'Edit' }</button>
            </div>
          );
          })}
        </div>
      </div>
      {editComponent}
    </div>
  );
}

export default Board;



function EditComponent({ props }) {
  const { id, setEditId, setEditComponent, getAllPosts } = props; 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  async function edit(id) {
    setEditId(null);
    setEditComponent(null);
    try {
      const updatedPost = { title: title, content: content };
      const response = await fetch(`${baseURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });
      await getAllPosts();
      if (!response.ok) throw new Error(`Error: ${response.status}`);
    } catch (error) {
    }

  }
  return (
    <>
      <p>You are currently editing post for ID of {id}</p>
      <div className="edit-container">
        <input type='text' value = {title} placeholder='title' onChange={
          (event) => {setTitle(event.target.value)}}/>
        <input type='text' value = {content} placeholder='content' onChange={
          (event) => {setContent(event.target.value)}}/>
        <button onClick={() => edit(id)}>Done</button>
      </div>
    </>
  )
}
