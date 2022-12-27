export default function ActiveUser({ username }) {
  return (
    <div className="m-4 flex flex-row rounded-md bg-slate-800 p-4 hover:bg-red-400">
      <Image
        loader={myLoader}
        src="me.png"
        alt="Picture of the author"
        width={30}
        height={300}
      />
      <div className="flex items-center justify-center font-mono text-base font-bold">
        {username}
      </div>
    </div>
  );
}
