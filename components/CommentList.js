import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Comment from "./Comment";

function CommentList({ comments, postId, image, name }) {
  const [realtimeComments] = useCollection(
    db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
  );

  return (
    <div className="bg-white w-8/12 mx-auto p-2 shadow-md rounded-2xl font-medium text-gray-500 my-4">
      {realtimeComments
        ? realtimeComments?.docs.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              name={name}
              image={image}
              comment={comment.data().comment}
              timestamp={comment.data().timestamp}
            />
          ))
        : comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              image={image}
              name={name}
              comment={comment.comment}
              timestamp={comment.timestamp}
            />
          ))}
    </div>
  );
}

export default CommentList;
