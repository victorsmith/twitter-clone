import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Navigation Bar */}
      <aside className="sticky top-0 h-screen bg-sky-400">
        <Sidebar></Sidebar>
      </aside>
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
