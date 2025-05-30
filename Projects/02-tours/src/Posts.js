import react, {useState} from "react";
import Post from "./Post";


const Posts = ({ posts, removeTour, setPosts }) => {
  const [buttonTrue, setButtonTrue] = useState(false);

  return (
    <div>
      <button className={buttonTrue ? 'hide' : 'show'} onClick={() => setButtonTrue(!buttonTrue)}> {buttonTrue ? "hide post" : "show post"} </button>
      {buttonTrue && 
          <button className='bg-red-180 text-white font-bold' onClick={() => setPosts([])}> Clear All </button>
      }
      {buttonTrue &&
        posts.map((post) => {
          return (
            <>
              <Post key={post.id} {...post} removeTour={removeTour} />
            </>
          );
        })}
    </div>
  );
};

export default Posts;
