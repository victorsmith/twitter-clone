// Fetch most recent 100 tweets
// Render them on the client side

import Layout from "./layout";
import Post from "./post";
import Reply from "./reply";

export default function ReplyFeed({ replies }) {
  return (
    <>
      <div className="m-4 flex flex-col rounded-md bg-slate-800 p-4">
        <h1 className="font-mono text-lg font-bold">Reply Feed</h1>
        {replies &&
          replies.map((reply, i) => {
            console.log("Reply #", i + 1);
            console.log("Reply #", reply);
            return <Reply key={i} reply={reply}></Reply>;
          })}
      </div>
    </>
  );
}
