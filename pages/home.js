import Layout from "../components/layout";
import NewPost from "../components/newPost";
import SearchBar from "../components/searchBar";
import { getCookie, getCookies, setCookie } from "cookies-next";
import constants from "../constants/constants";
import { useEffect, useState } from "react";
import Feed from "../components/feed";


function popTweet(tweetToDelete) {
  console.log("TweetToDelete", tweetToDelete)
  const updatedTweets = tweets.filter( t => !t._id.equals(tweetToDelete._id) )
  setTweets(updatedTweets)
}

async function fetchData() {
  const jwt =
    "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTRlZmFiMjAwODJjMzFjNTc2OTNiNiIsImlhdCI6MTY3MTc1MzY0MzkxMywiZXhwIjoxNjcxNzUzNzMwMzEzfQ.pZDaGYP4MvY47rh8hBYamu01wak7n7q0g8X7uCusVU7JR1kZ2ikxHGXNUn-E_Ed3AeojI2zJPjIttrMhiR8rz3t4-Jq3imVEbkwgIoraxh5TvSqAP2QfpaHQMulMyLFw6pwI1KrWNgXWsRacHfOiYRqQ3l8lgPy2AkrNbn8MyuLmgCpcxvcNMDOGnSfL1L4gFpwnpwv9ezxUMdb49REblIrZkx1BLx7IOC-IR7372v78uFT2g69KyvPGMC68g0eFT8A64FbUtK8ZNrACliOhBaCFw9Egxc-4eID-go3NMatUibFm5AwEDzIx2kFb2taK8Ri2BWnMvDkNQE_ZD7TPzwPeMhdLkE4uF1ZOqddUtetPnUxdPPzMkgASssqCAyKjB3HHdN1cq4wv6jjgDFFLPLzQDQm2Va_Plr80r_hyL8AGSnr9K9bGkS0-vplFgkrxxbtiuoWqdsCwUx0suF_5YH1HeBoqD2UaUcR-rU0ea0N-060TYtADQwq-baHpbP4QiJghZZZ0cn5irxp8p4v_XDZmBO1zuB6st9chgrvi-Rvvt1dIQVLtL-XRwsRMEIxzzdz0QMQnkUsMu0P0Ivheg3a7lvuhDplyWLOyxvxtadYdLGnvwI7UC4n2sp0d899BEi4XQM_DLnCXrXhxN9WuMwY3oAV2_bpOwMPodRw_-xk";
  const api = constants.apiBaseUrl;
  // console.log("ApiBaseUrl", api);

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
  const [tweets, setTweets] = useState();

  useEffect(() => {
    fetchData().then((data) => {
      setTweets(data);
    });
  }, []);


  useEffect(() => {
    console.log("Reloading after delete");
    fetchData().then((data) => {
      setTweets(data);
    });
  }, [tweets]);

  return (
    <Layout>
      <div className="mx-4 my-3 flex flex-col rounded-md p-1">
        <h1 className="font-mono text-xl font-bold">Welcome to Ugly Twitter</h1>
      </div>
      {/* <SearchBar></SearchBar> */}
      <NewPost></NewPost>

      <Feed tweets={tweets}></Feed>
    </Layout>
  );
}
