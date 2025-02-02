export default function TasksPage() {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-white">Tasks</h1>
      <div className="space-y-4">
        {[1, 2, 3].map((task) => (
          <div
            key={task}
            className="rounded-lg border border-gray-800 bg-gray-800/50 p-4 hover:bg-gray-800/75"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-200">Task {task}</h3>
              <span className="text-sm text-gray-400">Today</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              This is a sample task description
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
