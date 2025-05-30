import React, { useState } from "react";
import Posts from "./Posts";
import {useEffect} from 'react';
import app from './app.css'
import usePosts from "./usePosts";


const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  
  const {loading, posts, setPosts, fetchUrl} = usePosts(url)

  const removeTour = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts)
  }
  console.log('first ma data aaucha', posts)
  
  if (posts.length === 0) {
    return (
    <>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600  color-blue transition"
      onClick={() => fetchUrl()}> Refresh </button>
      <h3> No Posts Left</h3>
    </>
    )
  }

  return (
    <main>
      <h1>Welcome to React Posts page.</h1>
      {/* {
        loading && <h1> Loading... </h1>
      } */}
      {
        loading ? <h1> Loading...</h1> : <h4 className="align-center"> Posts Fetched Successfully </h4>
      }
      <Posts posts={posts} removeTour={removeTour} setPosts={setPosts}/>

    </main>
  );
}

export default App;
