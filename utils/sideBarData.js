import { FiHome } from "react-icons/fi";
import { BsChat, BsCardChecklist } from "react-icons/bs";
import { SlCompass } from "react-icons/sl";
import { IoIosRepeat } from "react-icons/io";
import { BsPlusLg, BsChatLeftText } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";

const sidebarTopData = [
  { id: 1, name: "Dashboard", path: "/", icon: FiHome },
  { id: 2, name: "Feedback", path: "/feedback", icon: BsChat },
  { id: 3, name: "Task", path: "/task", icon: BsCardChecklist },
  { id: 4, name: "Roadmap", path: "/roadmap", icon: SlCompass },
  { id: 5, name: "Changelog", path: "/changelog", icon: IoIosRepeat },
];


const sidebarBottomData = [
  { id: 1, name: "Invite People", path: "/invite-people", icon: BsPlusLg },
  { id: 2, name: "Help & Community", path: "/help-and-community", icon: BsChatLeftText },
  { id: 3, name: "Notifications", path: "/notifications", icon: VscBell },
];

export { sidebarTopData, sidebarBottomData };