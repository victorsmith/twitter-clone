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
    <div className="flex h-max w-max flex-col">
      {navigationOptions.map((navOptionsItem, index) => (
        <SidebarItem key={index} navSection={navOptionsItem}></SidebarItem>
      ))}
    </div>
  );
}
