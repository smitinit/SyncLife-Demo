/* eslint-disable react/prop-types */
import { CheckSquare, Users, Home } from "lucide-react";
import { Link, useLocation } from "react-router";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Twin",
    path: "/avatar",
    icon: Users,
  },
];

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform 
      border-r border-zinc-800/50 bg-black/75 backdrop-blur-sm transition-transform 
      duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 
              transition-all duration-200 ${
                isActive
                  ? "bg-zinc-800/50 text-zinc-100 shadow-[0_0_10px_-5px_rgba(0,0,0,0.3)]"
                  : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-100"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
