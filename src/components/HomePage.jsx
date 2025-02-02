import {
  Activity,
  Brain,
  Heart,
  Trophy,
  Smile,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Wellness Score",
    value: "85",
    change: "+5",
    icon: Heart,
    color: "from-pink-500/20 to-pink-500/5 text-pink-400 border-pink-500/20",
  },
  {
    label: "Tasks Completed",
    value: "24",
    change: "+3",
    icon: Trophy,
    color:
      "from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/20",
  },
  {
    label: "Mindfulness",
    value: "92",
    change: "+12",
    icon: Brain,
    color:
      "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/20",
  },
  {
    label: "Activity Level",
    value: "78",
    change: "+8",
    icon: Activity,
    color:
      "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/20",
  },
];

const highlights = [
  {
    title: "Daily Streak",
    value: "7 Days",
    description: "Keep up the great work! You're building strong habits.",
    icon: TrendingUp,
  },
  {
    title: "Mood Average",
    value: "Excellent",
    description: "Your mood has been consistently positive this week.",
    icon: Smile,
  },
];

export default function HomePage() {
  return (
    <div className="h-full p-8">
      {/* Welcome Section */}
      <div className="mb-8 rounded-xl border border-zinc-800/50 bg-black/40 p-8 backdrop-blur-sm">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
          Welcome Back
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-400">
          Track your wellness journey, maintain healthy habits, and achieve your
          personal goals. Your dedication to self-improvement is inspiring.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-xl border border-zinc-800/50 bg-black/40 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">{stat.label}</p>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold text-zinc-100">
                    {stat.value}
                  </p>
                  <span className="ml-2 text-sm text-emerald-400">
                    {stat.change}
                  </span>
                </div>
              </div>
              <div
                className={`rounded-full border bg-gradient-to-b p-3 
                ${stat.color}`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div
              className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent 
              via-zinc-500/10 to-transparent"
            />
          </div>
        ))}
      </div>

      {/* Highlights Section */}
      <div className="grid gap-6 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="group relative overflow-hidden rounded-xl border border-zinc-800/50 
            bg-gradient-to-b from-zinc-900/50 to-black/50 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full border border-zinc-800/50 bg-zinc-900/50 p-3">
                <highlight.icon className="h-6 w-6 text-zinc-400" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">{highlight.title}</h3>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-100">
                  {highlight.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  {highlight.description}
                </p>
              </div>
            </div>
            <div
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent 
              via-zinc-500/10 to-transparent"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
