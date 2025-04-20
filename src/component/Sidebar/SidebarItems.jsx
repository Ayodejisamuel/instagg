import Home from "./Home";
import Notification from "./Notifications";
import Search from "./Search";
import CreatePost from "./CreatePosts";
import ProfileAvatar from "./ProfileAvatar";
const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notification />
      <CreatePost />
      <ProfileAvatar />
    </>
  );
};

export default SidebarItems;
