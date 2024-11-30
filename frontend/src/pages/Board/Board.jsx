import { useState, useEffect } from "react";


function Board() {

  const baseURL = 'http://localhost:8000/api/posts';

  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState(1);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);



  return (
    <>
      <h1>CRUD Project Dashboard</h1>
      <h2>API Server: Powered by Express.js</h2>
      <li>Call API by js fetch (async and await)</li>
      <li>First get data from API and using state, re-render UI</li>
      <li>Then, using redux send data to redux, so this page just send data to redux, not get</li>
      <li>So, the role of redux is just share the data globally.</li>


      <div>
        <input type='number' value = {searchId} onChange={
          (event) => {setSearchId(event.target.value)}}/>
        <button onClick={search}>Search</button>
      </div>

      <div>
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
              <button className="delete-button">Delete</button>
            </div>
          );
          })}
        </div>
      </div>
    </>
  );
}

export default Board;



