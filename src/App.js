import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    
    <div className="bg-slate-800">

      <nav class="font-mono bg-blue-900 flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full mb-20">
        <div class="mb-2 sm:mb-0">
          <a href="/home" class="text-2xl no-underline text-white">DAYAO | Elective 4 - Activity 4</a>
        </div>
      </nav>

      <div className="flex flex-row flex-wrap justify-center gap-10 text-center">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default App;
