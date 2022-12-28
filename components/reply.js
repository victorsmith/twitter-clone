
export default function Reply({ reply }) {

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
