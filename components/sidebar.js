import SidebarItem from "./sidebarItem";

export default function Sidebar() {
  // Turn these into objects eventually
  const navigationOptions = [
    "home",
    "search",
    "notifications",
    "messages",
    "bookmarks",
    "blue",
    "profile",
  ];

  return (
    <div className="flex flex-col align-center justify-center m-2">
      {navigationOptions.map((navOptionsItem, index) => (
        <SidebarItem key={index} navSection={navOptionsItem}></SidebarItem>
      ))}
    </div>
  );
}
