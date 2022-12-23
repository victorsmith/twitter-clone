import Layout from "../components/layout";
import NewPost from "../components/newPost";
import SearchBar from "../components/searchBar";
import { getCookie, getCookies, setCookie } from "cookies-next";
import constants from "../constants/constants";
import { useEffect, useState } from "react";

async function fetchData() {
  const jwt =
    "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTRlZmFiMjAwODJjMzFjNTc2OTNiNiIsImlhdCI6MTY3MTc1MzY0MzkxMywiZXhwIjoxNjcxNzUzNzMwMzEzfQ.pZDaGYP4MvY47rh8hBYamu01wak7n7q0g8X7uCusVU7JR1kZ2ikxHGXNUn-E_Ed3AeojI2zJPjIttrMhiR8rz3t4-Jq3imVEbkwgIoraxh5TvSqAP2QfpaHQMulMyLFw6pwI1KrWNgXWsRacHfOiYRqQ3l8lgPy2AkrNbn8MyuLmgCpcxvcNMDOGnSfL1L4gFpwnpwv9ezxUMdb49REblIrZkx1BLx7IOC-IR7372v78uFT2g69KyvPGMC68g0eFT8A64FbUtK8ZNrACliOhBaCFw9Egxc-4eID-go3NMatUibFm5AwEDzIx2kFb2taK8Ri2BWnMvDkNQE_ZD7TPzwPeMhdLkE4uF1ZOqddUtetPnUxdPPzMkgASssqCAyKjB3HHdN1cq4wv6jjgDFFLPLzQDQm2Va_Plr80r_hyL8AGSnr9K9bGkS0-vplFgkrxxbtiuoWqdsCwUx0suF_5YH1HeBoqD2UaUcR-rU0ea0N-060TYtADQwq-baHpbP4QiJghZZZ0cn5irxp8p4v_XDZmBO1zuB6st9chgrvi-Rvvt1dIQVLtL-XRwsRMEIxzzdz0QMQnkUsMu0P0Ivheg3a7lvuhDplyWLOyxvxtadYdLGnvwI7UC4n2sp0d899BEi4XQM_DLnCXrXhxN9WuMwY3oAV2_bpOwMPodRw_-xk";
  const api = constants.apiBaseUrl;
  console.log("ApiBaseUrl", api);

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

  console.log("Tweets", tweets);
  return tweets;
}

export default function Home() {

  const [tweets, setTweets] = useState();

  useEffect(() => {
    const data = fetchData()
    setTweets(data)
  })

  useEffect(() => {
    console.log("HOME TT", tweets);
  })

  return (
    <Layout>
      <h1>Home Page</h1>
      <SearchBar></SearchBar>
      <br></br>

      <NewPost></NewPost>

      <ul>
        {tweets?.map((post, i) => (
          <li key={i}>{post.content}</li>
        ))}
      </ul>

      <br></br>

      <h2>Feed here and below</h2>
    </Layout>
  );
}
