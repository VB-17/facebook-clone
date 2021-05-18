import { useRef } from "react";
import { getSession } from "next-auth/client";

import Image from "next/image";
import { useRouter } from "next/router";
import { db } from "../../../firebase";
import firebase from "firebase";

import CommentList from "../../../components/CommentList";

function Comments({ comments, session }) {
  const inputRef = useRef(null);
  const router = useRouter();

  const sendComment = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts").doc(router.query.postId).collection("comments").add({
      comment: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = "";
  };
  return (
    <>
      <div className="bg-white w-8/12 mx-auto p-2 shadow-md rounded-2xl font-medium text-gray-500 mt-5">
        <div className="flex space-x-4 p-4 items-center">
          {session && (
            <Image
              className="rounded-full cursor-pointer"
              src={session.user.image}
              width={40}
              height={40}
              layout="fixed"
            />
          )}
          <form className="flex flex-1">
            <input
              ref={inputRef}
              type="text"
              placeholder={`Write a comment...`}
              className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none truncate"
            />

            <button type="submit" hidden onClick={sendComment}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <CommentList
        comments={comments}
        postId={router.query.postId}
        name={session.user.name}
        image={session.user.image}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  //   Prefetch the comments from the firestore
  const comments = await db
    .collection("posts")
    .doc(context.params.postId)
    .collection("comments")
    .get();

  const docs = comments.docs.map((comment) => ({
    id: comment.id,
    ...comment.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      comments: docs,
    },
  };
}

export default Comments;
