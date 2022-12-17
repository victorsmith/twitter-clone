import Link from "next/link";

export default function SidebarItem({ navSection }) {
  return (
    <div className="m-1 flex h-fit w-max flex-col rounded-lg bg-slate-500 p-1 hover:bg-red-200">
      <Link href={`/${navSection}`}>{navSection}</Link>
    </div>
  );
}
