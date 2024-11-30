import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: { posts: [] },
  reducers: {
    setPosts (state, action) {
      const posts = state;
      console.log(posts)
    }
  },
});

export default boardSlice;
