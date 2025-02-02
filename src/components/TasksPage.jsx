/* eslint-disable react/prop-types */

// import { tasks } from "../data/tasks";
// const Tasks = () => {
//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case "new":
//         return "from-emerald-400/20 to-emerald-400/10 text-emerald-400 border-emerald-400/20";
//       case "active":
//         return "from-amber-400/20 to-amber-400/10 text-amber-400 border-amber-400/20";
//       case "in progress":
//         return "from-purple-400/20 to-purple-400/10 text-purple-400 border-purple-400/20";
//       default:
//         return "from-slate-400/20 to-slate-400/10 text-slate-400 border-slate-400/20";
//     }
//   };

//   const getCategoryColor = (category) => {
//     switch (category.toLowerCase()) {
//       case "mental wellness":
//         return "bg-indigo-500/10 text-indigo-400";
//       case "fitness":
//         return "bg-red-500/10 text-red-400";
//       case "nutrition":
//         return "bg-green-500/10 text-green-400";
//       case "rest":
//         return "bg-blue-500/10 text-blue-400";
//       case "social wellness":
//         return "bg-pink-500/10 text-pink-400";
//       case "personal growth":
//         return "bg-amber-500/10 text-amber-400";
//       case "health":
//         return "bg-teal-500/10 text-teal-400";
//       case "productivity":
//         return "bg-purple-500/10 text-purple-400";
//       default:
//         return "bg-slate-500/10 text-slate-400";
//     }
//   };

//   return (
//     <div className="rounded-xl border border-zinc-800/50 bg-black/40 p-8 backdrop-blur-sm">
//       <h1 className="mb-8  text-3xl font-bold text-zinc-100 tracking-wide">
//         Wellness Journey!
//       </h1>
//       <div className="space-y-6">
//         {tasks.map((task) => (
//           <div
//             key={task.id}
//             className="group relative overflow-hidden rounded-lg border border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-black/50 p-6 transition-all duration-300 hover:border-zinc-700/50 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-zinc-900/30"
//           >
//             {/* Progress bar background */}
//             <div
//               className="absolute left-0 top-0 h-full bg-zinc-800/20 transition-all duration-300 group-hover:bg-zinc-800/30"
//               style={{ width: `${task.progress}%` }}
//             />

//             <div className="relative">
//               {/* Header */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <h3 className="text-xl font-semibold text-zinc-100">
//                     {task.title}
//                   </h3>
//                   <span
//                     className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(
//                       task.category
//                     )}`}
//                   >
//                     {task.category}
//                   </span>
//                   <span
//                     className={`rounded-full px-3 py-1 text-xs font-medium ${
//                       task.daily === true &&
//                       "bg-fuchsia-500/10 text-fuchsia-400"
//                     }`}
//                   >
//                     {task.daily && "Daily task"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center gap-1">
//                     <svg
//                       className="h-4 w-4 text-yellow-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 2a1 1 0 0 1 .781.375l2.625 3.25a1 1 0 0 1-1.562 1.25L10 4.46l-1.844 2.415a1 1 0 1 1-1.562-1.25l2.625-3.25A1 1 0 0 1 10 2Z"
//                         clipRule="evenodd"
//                       />
//                       <path
//                         fillRule="evenodd"
//                         d="M6.34 12.5a1 1 0 0 1-.391-1.359l3-5.5a1 1 0 1 1 1.75.968l-3 5.5a1 1 0 0 1-1.359.39Z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span className="text-sm text-yellow-500">
//                       {task.xp} XP
//                     </span>
//                   </div>
//                   <span
//                     className={`rounded-full border bg-gradient-to-b px-3 py-1 text-xs font-medium ${getStatusColor(
//                       task.status
//                     )}`}
//                   >
//                     {task.status}
//                   </span>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="mt-2 text-sm text-zinc-400">{task.description}</p>

//               {/* Footer */}
//               <div className="mt-4 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-800/50">
//                     <div
//                       className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300"
//                       style={{ width: `${task.progress}%` }}
//                     />
//                   </div>
//                   <span className="text-sm text-zinc-500">
//                     {task.progress}%
//                   </span>
//                 </div>
//                 <span
//                   className={`rounded-md px-2 py-1 text-xs font-medium ${
//                     task.priority.toLowerCase() === "high"
//                       ? "bg-red-500/10 text-red-400"
//                       : task.priority.toLowerCase() === "medium"
//                       ? "bg-amber-500/10 text-amber-400"
//                       : "bg-blue-500/10 text-blue-400"
//                   }`}
//                 >
//                   {task.priority} Priority
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tasks;

import { useState, useEffect } from "react";
import { tasks as allTasks } from "../data/tasks";
import { ChevronDown } from "lucide-react";

const TaskFilters = ({ tasks, setFilteredTasks }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const categories = [...new Set(tasks.map((task) => task.category))];
  const priorities = [...new Set(tasks.map((task) => task.priority))];
  const statuses = [...new Set(tasks.map((task) => task.status))];

  useEffect(() => {
    let filtered = tasks;

    if (categoryFilter) {
      filtered = filtered.filter(
        (task) => task.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    if (priorityFilter) {
      filtered = filtered.filter(
        (task) => task.priority.toLowerCase() === priorityFilter.toLowerCase()
      );
    }
    if (statusFilter) {
      filtered = filtered.filter(
        (task) => task.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    setFilteredTasks(filtered);
  }, [categoryFilter, priorityFilter, statusFilter, tasks, setFilteredTasks]);

  return (
    <div className="flex gap-4 mb-8">
      {/* Category Filter */}
      <div className="relative w-44">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="appearance-none outline-none hover:scale-105 bg-zinc-800 text-zinc-100 px-4 py-2 pr-10 rounded-md w-full"
        >
          <option value="">Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
      </div>

      {/* Priority Filter */}
      <div className="relative w-36">
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="appearance-none outline-none hover:scale-105 bg-zinc-800 text-zinc-100 px-4 py-2 pr-10 rounded-md w-full"
        >
          <option value="">Priority</option>
          {priorities.map((priority, index) => (
            <option key={index} value={priority}>
              {priority}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
      </div>

      {/* Status Filter */}
      <div className="relative w-36">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="appearance-none outline-none hover:scale-105 bg-zinc-800 text-zinc-100 px-4 py-2 pr-10 rounded-md w-full"
        >
          <option value="">Status</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
      </div>
    </div>
  );
};

const Tasks = () => {
  const [filteredTasks, setFilteredTasks] = useState(allTasks);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "new":
        return "from-emerald-400/20 to-emerald-400/10 text-emerald-400 border-emerald-400/20";
      case "active":
        return "from-amber-400/20 to-amber-400/10 text-amber-400 border-amber-400/20";
      case "in progress":
        return "from-purple-400/20 to-purple-400/10 text-purple-400 border-purple-400/20";
      default:
        return "from-slate-400/20 to-slate-400/10 text-slate-400 border-slate-400/20";
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "mental wellness":
        return "bg-indigo-500/10 text-indigo-400";
      case "fitness":
        return "bg-red-500/10 text-red-400";
      case "nutrition":
        return "bg-green-500/10 text-green-400";
      case "rest":
        return "bg-blue-500/10 text-blue-400";
      case "social wellness":
        return "bg-pink-500/10 text-pink-400";
      case "personal growth":
        return "bg-amber-500/10 text-amber-400";
      case "health":
        return "bg-teal-500/10 text-teal-400";
      case "productivity":
        return "bg-purple-500/10 text-purple-400";
      default:
        return "bg-slate-500/10 text-slate-400";
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800/50 bg-black/40 p-8 backdrop-blur-sm">
      <div className="flex justify-between">
        <h1 className="mb-8 text-3xl font-bold text-zinc-100 tracking-wide">
          Wellness Journey!
        </h1>

        {/* Filters */}
        <TaskFilters tasks={allTasks} setFilteredTasks={setFilteredTasks} />
      </div>

      <div className="space-y-6">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="group relative overflow-hidden rounded-lg border border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-black/50 p-6 transition-all duration-300 hover:border-zinc-700/50 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-zinc-900/30"
          >
            {/* Progress bar background */}
            <div
              className="absolute left-0 top-0 h-full bg-zinc-800/20 transition-all duration-300 group-hover:bg-zinc-800/30"
              style={{ width: `${task.progress}%` }}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {task.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(
                      task.category
                    )}`}
                  >
                    {task.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      task.daily === true &&
                      "bg-fuchsia-500/10 text-fuchsia-400"
                    }`}
                  >
                    {task.daily && "Daily task"}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 0 1 .781.375l2.625 3.25a1 1 0 0 1-1.562 1.25L10 4.46l-1.844 2.415a1 1 0 1 1-1.562-1.25l2.625-3.25A1 1 0 0 1 10 2Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.34 12.5a1 1 0 0 1-.391-1.359l3-5.5a1 1 0 1 1 1.75.968l-3 5.5a1 1 0 0 1-1.359.39Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-yellow-500">
                      {task.xp} XP
                    </span>
                  </div>
                  <span
                    className={`rounded-full border bg-gradient-to-b px-3 py-1 text-xs font-medium ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm text-zinc-400">{task.description}</p>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-800/50">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-zinc-500">
                    {task.progress}%
                  </span>
                </div>
                <span
                  className={`rounded-md px-2 py-1 text-xs font-medium ${
                    task.priority.toLowerCase() === "high"
                      ? "bg-red-500/10 text-red-400"
                      : task.priority.toLowerCase() === "medium"
                      ? "bg-amber-500/10 text-amber-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {task.priority} Priority
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
