import Layout from "../components/layout";
import NewPost from "../components/newPost";
import SearchBar from "../components/searchBar";
import constants from "../constants/constants";

export default function Home({ tweets }) {
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

    const tweets = await fetch(path);

    return {
      props: {
        tweets,
      },
    };
  }
}
