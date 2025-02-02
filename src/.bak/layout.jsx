/* eslint-disable react/prop-types */

import { useState } from "react";
import { Menu, X, CheckSquare, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Tasks",
      href: "/tasks",
      icon: CheckSquare,
    },
    {
      name: "Avatar",
      href: "/avatar",
      icon: User,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-900/75 backdrop-blur-sm">
        <div className="flex h-16 items-center px-4">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <span className="ml-4 text-xl font-semibold text-white">
            Dashboard
          </span>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-gray-800 bg-gray-900/75 backdrop-blur-sm transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-200 ease-in-out ${
          isSidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
