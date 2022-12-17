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
    <div className="flex flex-col h-max w-max">
      {navigationOptions.map((navOptionsItem) => {
        <SidebarItem navSection={navOptionsItem}></SidebarItem>
      })}
    </div>
  );
}
