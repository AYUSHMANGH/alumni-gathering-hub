import { HomeIcon, UsersIcon, BriefcaseIcon, CalendarIcon, HeartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Directory from "./pages/Directory.jsx";
import Jobs from "./pages/Jobs.jsx";
import Events from "./pages/Events.jsx";
import Donate from "./pages/Donate.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Directory",
    to: "/directory",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Directory />,
  },
  {
    title: "Jobs",
    to: "/jobs",
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Jobs />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <CalendarIcon className="h-4 w-4" />,
    page: <Events />,
  },
  {
    title: "Donate",
    to: "/donate",
    icon: <HeartIcon className="h-4 w-4" />,
    page: <Donate />,
  },
];
