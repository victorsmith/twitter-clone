import Post from "../../components/post";
import Cookies from "js-cookie";
import constants from "../../constants/constants";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import Layout from "../../components/layout";
import NewReply from "../../components/newReply";
import ReplyFeed from "../../components/replyFeed";

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
  const [tweetData, setTweetData] = useState();
  const router = useRouter();
  const { id } = router.query;

  console.log("## pid:", id);
  console.log("## router query", router.query);


  useEffect(() => {
    fetchTweetData(id).then((tweet) => {
      console.log("## pid:", id);
      console.log("## Tweet Data JOJ:", tweet);

      setTweetData(tweet);
    });
  }, [id]);

  useEffect(() => {
    // const hey = JSON.parse(tweetData)
    console.log("## postData:", [tweetData]);
  }, [tweetData]);

  return (
    <Layout>
      <div className="flex flex-col">
        <Post tweet={tweetData}></Post>
        <NewReply tweetID={id}></NewReply>

        { tweetData && <ReplyFeed replies={tweetData.replies}></ReplyFeed>}
      </div>
    </Layout>
  );
}
