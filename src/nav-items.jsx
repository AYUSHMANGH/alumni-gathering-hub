import { HomeIcon, InfoIcon, MailIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

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
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <div>About Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];
