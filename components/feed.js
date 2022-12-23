// Fetch most recent 100 tweets
// Render them on the client side

export default function Feed({ tweets }) {
  return (
    <>
      <h2>Feed here and below</h2>
      <ul>
        {tweets &&
          tweets.map((post, i) => {
            console.log("");
            return <li key={i}>{post.content}</li>;
          })}
      </ul>
    </>
  );
}
