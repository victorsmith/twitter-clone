import Post from "../../components/post";
import Cookies from "js-cookie";
import constants from "../../constants/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";

async function fetchTweetData(tweetID) {
  // TODO: Code Splitting
  // Get all post ID's | All invalid tweets will produce a 404
  const jwt = Cookies.get("token");
  const api = constants.apiBaseUrl;

  const endpoint = `${api}/tweets/${tweetID}`;
  const options = {
    method: "GET",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  };

  // Fetch all tweets
  const data = await fetch(endpoint, options);
  const tweet = await data.json();

  console.log("## Tweet Data:", tweet);

  return tweet;
}

export default function Tweet() {
  const router = useRouter();
  const { id } = router.query;

  console.log("## pid:", id);
  console.log("## router query", router.query);

  const [postData, setPostData] = useState();

  useEffect(() => {
    fetchTweetData(id).then((tweet) => {
      console.log("## pid:", id);
      console.log("## Tweet Data JOJ:", tweet);
      setPostData(tweet);
    });
  }, [id]);

  return (
    <Layout>
      <div className="flex flex-col">
        <Post tweet={postData}></Post>
        <h4>Replies</h4>
        {/* {postData.replies &&
        postData.replies.map((reply) => {
          <div className="flex flex-col justify-center bg-slate-300 p-3 align-middle">
            <h3>{reply.author}</h3>
            <h6>{reply.content}</h6>
          </div>;
        })} */}
      </div>
    </Layout>
  );
}
