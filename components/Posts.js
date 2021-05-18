import Post from "./Post";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          image={post.data().image}
          postImage={post.data().postImage}
          timestamp={post.data().timestamp}
        />
      ))}
    </div>
  );
}

export default Posts;
