import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-screen flex-row">
      {/* Navigation Bar */}
      <div className="basis-2z bg-sky-400 sm:basis-1/6">
        <h1>Navigation Bar</h1>
        <Sidebar></Sidebar>
      </div>

      {/* Main Content */}
      <div className="">
        <main>{children}</main>
      </div>
    </div>
  );
}
