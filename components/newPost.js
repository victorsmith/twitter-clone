import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import constants from "../constants/constants";

export default function NewPost() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const api = constants.apiBaseUrl;

  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault();

    // Get data from the form.
    const data = {
      content: event.target.tweet.value,
    };

    const jwt = Cookies.get("token");
    const api = constants.apiBaseUrl;
    // console.log("ApiBaseUrl", api);

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
    
    // Re-render the page
    setLoading(false)
    event.target.tweet.value = "";
  };

  return (
    <div className="m-4 flex flex-col rounded-md bg-slate-800 p-4">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="textarea"
          id="tweet"
          placeholder="Input your tweet here..."
          name="tweet"
          required
          className="basis-5/6 px-4"
        />
        <button
          type="submit"
          className="max-w-lg basis-1/6 rounded-lg bg-blue-500 p-2"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}
