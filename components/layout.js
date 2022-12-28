import ActiveUser from "./activeUser";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Navigation Bar */}
      <aside className="sticky top-0 flex flex-col h-screen justify-center bg-sky-400 align-middle">
        <Sidebar></Sidebar>
        {/* <ActiveUser username={"User"}></ActiveUser>  */}
      </aside>
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
