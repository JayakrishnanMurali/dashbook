import { Icons } from "../icons";
import { NavThemeToggle } from "./nav-theme";
import { Button } from "@/components/ui/button";
import React from "react";

export const DashboardTopNav = () => {
  return (
    <nav className="flex justify-between items-center mb-4">
      <h2>Welcome Jay,</h2>

      <div className="flex gap-x-2 items-center">
        <Button>
          <Icons.add className="mr-2 w-5 h-5" /> Add Widget
        </Button>
        <Button variant="ghost" size="sm">
          <Icons.bell className="hover:text-theme-900 dark:text-theme-400 dark:hover:text-theme-100" />
          <span className="sr-only">Notification</span>
        </Button>
        <NavThemeToggle />
      </div>
    </nav>
  );
};
