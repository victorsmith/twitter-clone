import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import constants from "../constants/constants";

export default function NewPost() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const api = constants.apiBaseUrl;
  console.log("ApiBaseUrl:", api);

  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault();

    // Get data from the form.
    const data = {
      content: event.target.tweet.value,
    };

    console.log("data", data);

    const jwt =
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTRlZmFiMjAwODJjMzFjNTc2OTNiNiIsImlhdCI6MTY3MTc1MzY0MzkxMywiZXhwIjoxNjcxNzUzNzMwMzEzfQ.pZDaGYP4MvY47rh8hBYamu01wak7n7q0g8X7uCusVU7JR1kZ2ikxHGXNUn-E_Ed3AeojI2zJPjIttrMhiR8rz3t4-Jq3imVEbkwgIoraxh5TvSqAP2QfpaHQMulMyLFw6pwI1KrWNgXWsRacHfOiYRqQ3l8lgPy2AkrNbn8MyuLmgCpcxvcNMDOGnSfL1L4gFpwnpwv9ezxUMdb49REblIrZkx1BLx7IOC-IR7372v78uFT2g69KyvPGMC68g0eFT8A64FbUtK8ZNrACliOhBaCFw9Egxc-4eID-go3NMatUibFm5AwEDzIx2kFb2taK8Ri2BWnMvDkNQE_ZD7TPzwPeMhdLkE4uF1ZOqddUtetPnUxdPPzMkgASssqCAyKjB3HHdN1cq4wv6jjgDFFLPLzQDQm2Va_Plr80r_hyL8AGSnr9K9bGkS0-vplFgkrxxbtiuoWqdsCwUx0suF_5YH1HeBoqD2UaUcR-rU0ea0N-060TYtADQwq-baHpbP4QiJghZZZ0cn5irxp8p4v_XDZmBO1zuB6st9chgrvi-Rvvt1dIQVLtL-XRwsRMEIxzzdz0QMQnkUsMu0P0Ivheg3a7lvuhDplyWLOyxvxtadYdLGnvwI7UC4n2sp0d899BEi4XQM_DLnCXrXhxN9WuMwY3oAV2_bpOwMPodRw_-xk";
    const api = constants.apiBaseUrl;
    console.log("ApiBaseUrl", api);

    const endpoint = `${api}/tweets/`;
    const options = {
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify({
        content: data.content,
      }),
    };

    // Fetch all tweets
    const res = await fetch(endpoint, options);
    console.log("Res (post tweet)", res)
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="tweet">Tweet</label>
        <input type="textarea" id="tweet" name="tweet" required />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}
