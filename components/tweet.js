import styles from "./tweet.module.css";
import Image from "next/image";

export default function Tweet({ tweet }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://picsum.photos/id/237/200/300`;
  };

  return (
    <div className="m-1 flex flex-col bg-slate-800 p-1">
      <div className="flex grow flex-row justify-between">
        <Image
          loader={myLoader}
          src="me.png"
          alt="Picture of the author"
          width={20}
          height={20}
        />
        <h6 className="px-2">{tweet.author}</h6>
      </div>

      <p>{tweet.content}</p>
      <div className="flex justify-between">
        <div>
          Replies: <span>{tweet.replies.length}</span>
        </div>
        <div>
          Likes: <span>tweet.likes</span>
        </div>
      </div>
    </div>
  );
}
