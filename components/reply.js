import { useEffect, useState } from "react";
import constants from "../constants/constants";
import Cookies from "js-cookie";

export default function Reply({ reply }) {
  const [user, setUser] = useState();

  async function likeReply(event) {
    alert("Liking replies is coming soon");
  }

  async function replyReply(event) {
    alert("Reply to replies - Coming soon!");
  }

  function editReply(event) {
    alert("Coming soon!");
  }

  async function deleteReply(event) {
    alert("Delete");
  }

  console.log("### Reply", reply);

  async function fetchAuthor(authorID) {
    const jwt = Cookies.get("token");
    const api = constants.apiBaseUrl;

    console.log("jwt", jwt)
    console.log("api", api)
    console.log("res", authorID)

    const endpoint = `${api}/users/${authorID}`;
    const options = {
      method: "GET",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    };

    const res = await fetch(endpoint, options);
    return res
  }

  useEffect(() => {
    fetchAuthor(reply.author)
      .then((data) => setUser(data))
      .catch((err) => console.log("Error (replies - user fetch"));
    console.log("User fetched replies");
  }, [reply]);

  
  useEffect(() => {
    console.log("Reply author", reply.author);
    console.log("User fetched replies", user);
  }, [user]);


  return (
    <div className="my-2 flex flex-col rounded-md border-2 border-solid border-sky-500 bg-slate-500 p-4 hover:bg-red-400">
      {/* Reply author */}
      <div className="flex items-center justify-center font-mono text-base font-bold">
        {reply.author.username}
      </div>

      {/* Reply content */}
      <div className="my-2 rounded-lg bg-slate-600 p-2">
        <p className="">{reply.content}</p>
      </div>

      {/* Bottom row - Reply Interactions */}
      <div className="flex justify-around space-x-5">
        <div onClick={replyReply} className="my-2 rounded-lg bg-slate-600 p-2">
          Replies: <span>{reply.replies.length}</span>
        </div>
        <div onClick={likeReply} className="my-2 rounded-lg bg-slate-600 p-2">
          Like: 0 (Coming Soon)
        </div>
        <div onClick={editReply} className="my-2 rounded-lg bg-slate-600 p-2">
          Edit
        </div>
        <div
          onClick={deleteReply}
          className="red my-2 rounded-lg bg-red-600 p-2"
        >
          Delete
        </div>
      </div>
    </div>
  );
}
