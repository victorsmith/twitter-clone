import Link from "next/link";
import Image from "next/image";
import constants from "../constants/constants";
import { useRouter } from "next/router";
import { Suspense } from "react";

export default function Post({ tweet }) {
  const router = useRouter();

  const myLoader = ({ src, width, quality }) => {
    return `https://picsum.photos/id/237/200/300`;
  };

  function routeToTweet(event) {
    alert("Viewing tweets individually is coming soon");
  }

  async function likeTweet(event) {
    alert("Liking tweets individually is coming soon");
  }

  async function replyTweet(event) {
    const jwt =
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTRlZmFiMjAwODJjMzFjNTc2OTNiNiIsImlhdCI6MTY3MTc1MzY0MzkxMywiZXhwIjoxNjcxNzUzNzMwMzEzfQ.pZDaGYP4MvY47rh8hBYamu01wak7n7q0g8X7uCusVU7JR1kZ2ikxHGXNUn-E_Ed3AeojI2zJPjIttrMhiR8rz3t4-Jq3imVEbkwgIoraxh5TvSqAP2QfpaHQMulMyLFw6pwI1KrWNgXWsRacHfOiYRqQ3l8lgPy2AkrNbn8MyuLmgCpcxvcNMDOGnSfL1L4gFpwnpwv9ezxUMdb49REblIrZkx1BLx7IOC-IR7372v78uFT2g69KyvPGMC68g0eFT8A64FbUtK8ZNrACliOhBaCFw9Egxc-4eID-go3NMatUibFm5AwEDzIx2kFb2taK8Ri2BWnMvDkNQE_ZD7TPzwPeMhdLkE4uF1ZOqddUtetPnUxdPPzMkgASssqCAyKjB3HHdN1cq4wv6jjgDFFLPLzQDQm2Va_Plr80r_hyL8AGSnr9K9bGkS0-vplFgkrxxbtiuoWqdsCwUx0suF_5YH1HeBoqD2UaUcR-rU0ea0N-060TYtADQwq-baHpbP4QiJghZZZ0cn5irxp8p4v_XDZmBO1zuB6st9chgrvi-Rvvt1dIQVLtL-XRwsRMEIxzzdz0QMQnkUsMu0P0Ivheg3a7lvuhDplyWLOyxvxtadYdLGnvwI7UC4n2sp0d899BEi4XQM_DLnCXrXhxN9WuMwY3oAV2_bpOwMPodRw_-xk";
    const api = constants.apiBaseUrl;
    const tweetId = tweet._id;

    const endpoint = `${api}/replies/${tweetId}`;
    const options = {
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    };

    // Fetch all tweets
    const res = await fetch(endpoint, options);
    const final = await res.json();
  }

  function editTweet(event) {
    alert("Coming soon!");
  }

  async function deleteTweet(event) {
    alert("Delete");
    const jwt =
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTRlZmFiMjAwODJjMzFjNTc2OTNiNiIsImlhdCI6MTY3MTc1MzY0MzkxMywiZXhwIjoxNjcxNzUzNzMwMzEzfQ.pZDaGYP4MvY47rh8hBYamu01wak7n7q0g8X7uCusVU7JR1kZ2ikxHGXNUn-E_Ed3AeojI2zJPjIttrMhiR8rz3t4-Jq3imVEbkwgIoraxh5TvSqAP2QfpaHQMulMyLFw6pwI1KrWNgXWsRacHfOiYRqQ3l8lgPy2AkrNbn8MyuLmgCpcxvcNMDOGnSfL1L4gFpwnpwv9ezxUMdb49REblIrZkx1BLx7IOC-IR7372v78uFT2g69KyvPGMC68g0eFT8A64FbUtK8ZNrACliOhBaCFw9Egxc-4eID-go3NMatUibFm5AwEDzIx2kFb2taK8Ri2BWnMvDkNQE_ZD7TPzwPeMhdLkE4uF1ZOqddUtetPnUxdPPzMkgASssqCAyKjB3HHdN1cq4wv6jjgDFFLPLzQDQm2Va_Plr80r_hyL8AGSnr9K9bGkS0-vplFgkrxxbtiuoWqdsCwUx0suF_5YH1HeBoqD2UaUcR-rU0ea0N-060TYtADQwq-baHpbP4QiJghZZZ0cn5irxp8p4v_XDZmBO1zuB6st9chgrvi-Rvvt1dIQVLtL-XRwsRMEIxzzdz0QMQnkUsMu0P0Ivheg3a7lvuhDplyWLOyxvxtadYdLGnvwI7UC4n2sp0d899BEi4XQM_DLnCXrXhxN9WuMwY3oAV2_bpOwMPodRw_-xk";
    const api = constants.apiBaseUrl;
    const tweetId = tweet._id;

    const endpoint = `${api}/tweets/${tweetId}`;
    const options = {
      method: "DELETE",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    };

    // Fetch all tweets
    const res = await fetch(endpoint, options);
    console.log("res", res);
    const final = await res.json();
    console.log("final", final);
    router.push("/home");
  }

  return (
    <>
      {tweet && (
        <Link href={`/tweet/${tweet._id}`}>
        <div
          // onClick={routeToTweet}
          className="m-4 flex flex-col rounded-md bg-slate-800 p-4 hover:bg-red-400"
        >
          {/* Top Row */}
          <div className="flex grow flex-row space-x-3 align-middle">
            <Image
              loader={myLoader}
              src="me.png"
              alt="Picture of the author"
              width={30}
              height={300}
            />
            <div className="flex items-center justify-center font-mono text-base font-bold">
              {tweet.author.username}
            </div>
          </div>

          {/* Tweet Content */}
          <div className="my-2 rounded-lg bg-slate-600 p-2">
            <p className="">{tweet.content}</p>
          </div>

          {/* Bottom row - Tweet Interactions */}
          <div className="flex justify-around space-x-5">
            <div
              onClick={replyTweet}
              className="my-2 rounded-lg bg-slate-600 p-2"
            >
              Replies: <span>{tweet.replies.length}</span>
            </div>
            <div
              onClick={likeTweet}
              className="my-2 rounded-lg bg-slate-600 p-2"
            >
              Like: 0 (Coming Soon)
            </div>
            <div
              onClick={editTweet}
              className="my-2 rounded-lg bg-slate-600 p-2"
            >
              Edit
            </div>
            <div
              onClick={deleteTweet}
              className="red my-2 rounded-lg bg-red-600 p-2"
            >
              Delete
            </div>
          </div>
        </div>
      </Link>
      )}
    </>
  );
}
