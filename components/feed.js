// Fetch most recent 100 tweets
// Render them on the client side

import Tweet from "./tweet";

export default function Feed({ tweets }) {
  return (
    <>
      <div className="m-4 flex flex-col rounded-md bg-slate-800 p-4">
        <h1>Feed:</h1>
      </div>

      <ul>
        {tweets &&
          tweets.map((post, i) => {
            console.log("");
            return <Tweet key={i} tweet={post}></Tweet>;
          })}
      </ul>
    </>
  );
}
