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
    <div className="align-center justify-center">
      <h1>UglyTwitter</h1>
      {navigationOptions.map((navOptionsItem, index) => (
        <SidebarItem key={index} navSection={navOptionsItem}></SidebarItem>
      ))}
    </div>
  );
}
