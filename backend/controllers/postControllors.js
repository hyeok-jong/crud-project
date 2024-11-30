import { getPosts } from '../data/posts.js';

let posts = getPosts();

function reorderPosts(posts) {
  posts = posts.map((post, index) => ({
    ...post,
    id: index + 1,
  }));
  return posts;
}

export const getAllPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  // http://localhost:8000/api/posts?limit=2
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
}


export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const filteredPosts = posts.find((post) => post.id === id);

  if (!filteredPosts) {
    const error = new Error(`A post with id of ${id} is not exists`);
    error.status = 404;
    return next(error);
    // error middleware로 넘어가야 하니, res 하면 안됨.
  } else {
    res.status(200).json(filteredPosts);
  }
}

export const createPost = (req, res, next) => {

  const newPost = {...req.body, id: posts.length + 1}
  console.log(newPost);
  if (!req.body.title) {
    const error = new Error(`New post don't have title`);
    error.status = 400;
    return next(error);
  } else if (!req.body.content) {
    const error = new Error(`New post don't have content`);
    error.status = 400;
    return next(error);
  } else {
    posts.push(newPost);
    res.status(200).json(posts);
  }
}


export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => (post.id === id));

  if (!post) {
    const error = new Error(`The id of ${id} is not exist`);
    error.status = 404;
    return next(error);
  } else if (!req.body.title && !req.body.content) {
    const error = new Error(`Both title and body not given`);
    error.status = 400;
    return next(error);
  } else {
    if (req.body.title) {
      post.title = req.body.title;
    }
    if (req.body.content) {
      post.content = req.body.content;
    }
    res.json(posts);
  }
}


export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => (post.id === id));

  if (!post) {
    const error = new Error(`The id of ${id} is not exist`);
    error.status = 404;
    return next(error)
  } else {
    posts = posts.filter((post) => (post.id !== id));
    posts = reorderPosts(posts);
  }

  res.json(posts);
}
