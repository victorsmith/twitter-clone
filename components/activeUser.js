import Image from "next/image";

export default function ActiveUser({ username }) {
  return (
    <div className="m-4 flex flex-row rounded-md bg-slate-800 p-4 hover:bg-red-400">
      <div className="flex items-center justify-center font-mono text-base font-bold">
        {username}
      </div>
    </div>
  );
}
