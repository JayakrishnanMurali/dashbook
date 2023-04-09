import { routes } from "./routes";
import { Icons } from "@/components/common/icons";

export const _dashboardSection = [
  {
    id: "Overview",
    name: "Overview",
    widgets: ["weather", "calendar", "meetings"],
    icon: Icons.dashboard,
    href: routes.dashboard,
  },
  {
    id: "Tasks",
    name: "Tasks",
    widgets: [],
    icon: Icons.tasks,
    href: routes["dashboard-tasks"],
  },
  {
    id: "News",
    name: "News",
    widgets: [],
    icon: Icons.news,
    isNew: true,
    href: routes["dashboard-news"],
    disabled: true,
  },
  {
    id: "Finance",
    name: "Finance",
    widgets: [],
    icon: Icons.finance,
    href: routes["dashboard-finance"],
    disabled: true,
  },
  {
    id: "Notes",
    name: "Notes",
    widgets: [],
    icon: Icons.notes,
    href: routes["dashboard-notes"],
    disabled: true,
  },
];

export type _dashboardSectionType = typeof _dashboardSection;
