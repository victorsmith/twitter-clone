import Layout from "../components/layout";
import NewPost from "../components/newPost";
import SearchBar from "../components/searchBar";
import { getCookie, getCookies, setCookie } from "cookies-next";
import constants from "../constants/constants";
import { useContext, useEffect, useState } from "react";
import Feed from "../components/feed";
import Cookies from "js-cookie";
import AppContext from "../components/AppContext";

function popTweet(tweetToDelete) {
  console.log("TweetToDelete", tweetToDelete);
  const updatedTweets = tweets.filter((t) => !t._id.equals(tweetToDelete._id));
  setTweets(updatedTweets);
}

async function fetchData() {
  // TODO: Activate HTTPOnly => Once you do Cookie.get will no longer work
  const jwt = Cookies.get("token");
  const api = constants.apiBaseUrl;

  const endpoint = `${api}/tweets/`;
  const options = {
    method: "GET",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  };

  // Fetch all tweets
  const stream = await fetch(endpoint, options);
  const tweets = await stream.json();

  // console.log("Tweets", tweets);
  return tweets;
}

export default function Home() {
  const context = useContext(AppContext);
  const [tweets, setTweets] = useState();
  
  useEffect(() => {
    fetchData().then((data) => {
      setTweets(data);
    });
  }, []);

  return (
    <Layout>
      <div className="mx-4 my-3 flex items-center justify-between rounded-md p-1">
        <h1 className="font-mono text-xl font-bold">Welcome to Ugly Twitter</h1>

        {/* Place user component here*/}
        <h2 className="font-mono text-md">{}</h2>
      </div>
      {/* <SearchBar></SearchBar> */}
      <NewPost></NewPost>

      <Feed tweets={tweets}></Feed>
    </Layout>
  );
}
