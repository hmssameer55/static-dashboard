import { CircleCheck, File, Home } from "lucide-react";

const AVATARS = [
  { color: "bg-gradient-to-r from-red-500 to-orange-500" },
  { color: "bg-gradient-to-r from-amber-500 to-yellow-500" },
  { color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { color: "bg-gradient-to-r from-fuchsia-500 to-pink-500" },
  { color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { color: "bg-gradient-to-r from-emerald-500 to-green-500" },
];

const MENU_ITEMS = [
  {
    icon: Home,
    label: "Home",
    active: true,
  },
  {
    icon: File,
    label: "Practice",
    active: false,
  },
  {
    icon: CircleCheck,
    label: "Assessment",
    active: false,
  },
];

const OFFERS = [
  { code: "GRAB25", discount: "25%", color: "from-purple-700 to-purple-500" },
  { code: "FLAT50", discount: "50%", color: "from-pink-600 to-pink-400" },
  { code: "FLAT50", discount: "50%", color: "from-pink-600 to-pink-400" },
];

const SUBJECTS = [
  {
    name: "Physics",
    score: 0,
    targetScore: 85,
    progress: 0,
    targetProgress: 75,
    gradientId: "physics-gradient",
    gradientColors: {
      start: "#f59e0b",
      middle: "#eab308",
      end: "#22c55e",
    },
    dotColor: "#22c55e",
    dotPosition: { angle: -60 },
  },
  {
    name: "Chemistry",
    score: 0,
    targetScore: 78,
    progress: 0,
    targetProgress: 60,
    gradientId: "chemistry-gradient",
    gradientColors: {
      start: "#f59e0b",
      middle: "#f97316",
      end: "#f59e0b",
    },
    dotColor: "#f97316",
    dotPosition: { angle: -120 },
  },
  {
    name: "Mathematics",
    score: 0,
    targetScore: 92,
    progress: 0,
    targetProgress: 80,
    gradientId: "mathematics-gradient",
    gradientColors: {
      start: "#f59e0b",
      middle: "#eab308",
      end: "#22c55e",
    },
    dotColor: "#22c55e",
    dotPosition: { angle: -60 },
  },
  {
    name: "Accounts",
    score: 0,
    targetScore: 62,
    progress: 0,
    targetProgress: 40,
    gradientId: "accounts-gradient",
    gradientColors: {
      start: "#f59e0b",
      middle: "#eab308",
      end: "#22c55e",
    },
    dotColor: "#22c55e",
    dotPosition: { angle: -60 },
  },
  {
    name: "Biology",
    score: 0,
    targetScore: 100,
    progress: 0,
    targetProgress: 90,
    gradientId: "biology-gradient",
    gradientColors: {
      start: "#f59e0b",
      middle: "#eab308",
      end: "#22c55e",
    },
    dotColor: "#22c55e",
    dotPosition: { angle: -60 },
  },
];

export { AVATARS, MENU_ITEMS, OFFERS, SUBJECTS };
