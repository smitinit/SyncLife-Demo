/* eslint-disable react/prop-types */
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-black/75 backdrop-blur-sm">
      <div className="flex h-16 items-center px-4">
        <button
          onClick={toggleSidebar}
          className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-zinc-100"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <div className="flex flex-row justify-between w-full">
          <Link
            to="/"
            className="ml-4 text-xl font-semibold text-zinc-100 tracking-widest"
          >
            SyncLife
          </Link>
          <span className="mr-4 text-xl font-semibold text-zinc-100 tracking-widest">
            Demo Application
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
