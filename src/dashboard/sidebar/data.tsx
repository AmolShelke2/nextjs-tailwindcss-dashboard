import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import { TimeManageIcon } from "./icons/TimeManageIcon";
import { AiOutlineUser } from "react-icons/ai";

import React from "react";

export const data = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "my profile",
    icon: <AiOutlineUser size={10} />,
    link: "/admin/myprofile",
  },
  {
    title: "Projects",
    icon: <ProjectIcon />,
    link: "/admin/projects",
  },
  {
    title: "My tasks",
    icon: <TaskIcon />,
    link: "/admin/tasks",
    subItems: [
      {
        title: "Imp tasks",
        link: "/admin/tasks/imp-tasks",
      },
      {
        title: "pending tasks",
        link: "/admin/tasks/pending",
      },
    ],
  },
  {
    title: "Calendar",
    icon: <CalendarIcon />,
    link: "/admin/calendar",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/admin/settings",
    // Adding sub-items for the "Settings" dropdown
    subItems: [
      {
        title: "General",
        link: "/admin/settings/general",
      },
      {
        title: "Security",
        link: "/admin/settings/security",
      },
    ],
  },
  {
    title: "Time manage",
    icon: <TimeManageIcon />,
    link: "/admin/time-manage",
  },
  {
    title: "Reports",
    icon: <ReportIcon />,
    link: "/admin/reports",
  },
  {
    title: "Documentation",
    icon: <DocIcon />,
    link: "/admin/documentation",
  },
];
