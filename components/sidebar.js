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
    <div className="align-center m-2 flex flex-col justify-center">
      {navigationOptions.map((navOptionsItem, index) => (
        <SidebarItem key={index} navSection={navOptionsItem}></SidebarItem>
      ))}
    </div>
  );
}
