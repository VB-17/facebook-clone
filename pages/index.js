import { getSession } from "next-auth/client";
import Head from "next/head";
import { db } from "../firebase";

import BreakpointInfo from "../components/BreakpointInfo";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BreakpointInfo />
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  // Prefetch the post from the firestore
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
