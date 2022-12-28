// Fetch most recent 100 tweets
// Render them on the client side

import Layout from "./layout";
import Post from "./post";

export default function Feed({ tweets }) {

  return (
    <>
      <div className="m-4 flex flex-col rounded-md bg-slate-800 p-4">
        <h1 className="font-mono text-lg font-bold">Feed</h1>
      </div>

      {tweets &&
        tweets.map((tweet, i) => {
          console.log("");
          return <Post key={i} tweet={tweet}></Post>;
        })}
    </>
  );
}
