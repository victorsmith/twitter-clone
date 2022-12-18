import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-screen flex-row">
      {/* Navigation Bar */}
      <div className="flex flex-col min-h-screen align-center justify-center bg-sky-400 sm:basis-1/6">
        <Sidebar></Sidebar>
      </div>

      {/* Main Content */}
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
