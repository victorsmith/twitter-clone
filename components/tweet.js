import styles from "./tweet.module.css";
import Image from "next/image";

export default function Tweet({ tweet }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://picsum.photos/id/237/200/300`;
  };

  return (
    <div className="m-4 flex flex-col rounded-md bg-slate-800 p-4">
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
      <div className="flex justify-around">
        <div className="my-2 rounded-lg bg-slate-600 p-2">
          Replies: <span>{tweet.replies.length}</span>
        </div>
        <div className="my-2 rounded-lg bg-slate-600 p-2">
          Like: 0 (Coming Soon)
        </div>
      </div>
    </div>
  );
}
