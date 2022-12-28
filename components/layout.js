import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Navigation Bar */}
      <aside className="sticky top-0 h-screen justify-center bg-sky-400 align-middle">
        <Sidebar></Sidebar>
      </aside>
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
