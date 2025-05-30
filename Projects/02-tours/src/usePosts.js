import react, { useEffect, useState } from "react";


const usePosts = (url) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return {
    loading, 
    posts,
    setPosts,
    fetchUrl
  }
};

export default usePosts