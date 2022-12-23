import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-screen flex-row">
      {/* Navigation Bar */}
      <div className="sticky top-0 flex h-screen flex-col justify-center bg-sky-400 sm:basis-1/6">
        <Sidebar className="sticky top-0 h-screen"></Sidebar>
      </div>

      {/* Main Content */}
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
