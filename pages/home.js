import Layout from "../components/layout";
import NewPost from "../components/newPost";
import SearchBar from "../components/searchBar";
import { getCookie, getCookies, setCookie } from "cookies-next";
import constants from "../constants/constants";
import { useEffect } from "react";

export default function Home({ tweets }) {

  console.log("Tweets", tweets)
  useEffect(() => {
    setCookie("hey", "asasa"); 
    // setCookie("jwt", "asasa"); 
  })
  

  return (
    <Layout>
      <h1>Home Page</h1>
      <SearchBar></SearchBar>
      <br></br>

      <NewPost></NewPost>

      <br></br>

      <h2>Feed here and below</h2>
    </Layout>
  );

  async function getServerSideProps() {
    const path = constants.apiBaseUrl;
    console.log("ApiBaseUrl", path);

    // Fetch all tweets
    const res = await fetch(`${path}/tweets/`);
    const tweets = res.json();

    console.log(tweets)

    return {
      props: {
        tweets,
      },
    };
  }
}
