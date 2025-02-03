import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/TasksPage";
import AvatarViewer from "./components/AvatarPage";
import HomePage from "./components/HomePage";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />
        <Sidebar isOpen={isSidebarOpen} />

        <main
          className={`pt-16 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "pl-64" : "pl-0"
          }`}
        >
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/avatar" element={<AvatarViewer />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
