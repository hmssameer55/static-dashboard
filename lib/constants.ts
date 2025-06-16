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

export { AVATARS, MENU_ITEMS };
