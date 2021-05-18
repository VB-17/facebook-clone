import Post from "./Post";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.data().name}
              message={post.data().message}
              image={post.data().image}
              postImage={post.data().postImage}
              timestamp={post.data().timestamp}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.name}
              message={post.message}
              image={post.image}
              postImage={post.postImage}
              timestamp={post.timestamp}
            />
          ))}
    </div>
  );
}

export default Posts;
