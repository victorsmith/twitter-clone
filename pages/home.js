import Layout from "../components/layout";
import NewPost from "../components/newPost";
import SearchBar from "../components/searchBar";
export default function Home() {
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

    const tweets = await fetch(path);

    return {
      props: {
        tweets,
      },
    };
  }

}
