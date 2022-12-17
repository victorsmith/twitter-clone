import Link from "next/link";


export default function SidebarItem({ navSection }) {
  return (
    <div className="m-1 rounded-lg flex h-fit w-max flex-col bg-slate-500 p-1 hover:bg-red-200">
      <Link href={`/${navSection}`}>
        {navSection}
      </Link>
    </div>
  );
}
