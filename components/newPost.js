import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function NewPost() {
  ``;

  const [tweets, setTweets] = useState([]);

  const handleSubmit = (e) => {
    // Prevents form from refreshing the page
    e.preventDefault();

    const data = {
      tweetBody: e.target.tweet.value,
    };

    setTweets((tweetHistory) => [...tweetHistory, data]);
  };

  useEffect(() => {
    console.log("Form result:", tweets);
  }, [tweets]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tweet"></label>
        <input
          type="text"
          // value="What's on your mind?"
          id="tweet"
          name="tweet"
          required
          minLength="1"
          maxLength="280"
        ></input>

        <button type="submit">Tweet</button>

        {/* RegEx: pattern="[a-z0-9]{1,15}" */}
      </form>
    </div>
  );
}
