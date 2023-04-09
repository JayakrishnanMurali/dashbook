import { buttonVariants } from "@/components/ui/button";
import { _dashboardSection } from "@/config/data";
import { strStrip } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavSections = () => {
  const router = useRouter();

  const getSelectedRoute = (menuLink: string) => {
    return strStrip(router.pathname) === strStrip(menuLink);
  };

  return (
    <div className="flex flex-col gap-y-4">
      {_dashboardSection.map((data) => (
        <Link
          key={data.id}
          href={data.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex justify-start relative gap-x-4 items-center",
            data.disabled && "opacity-50 pointer-events-none",
            getSelectedRoute(data.href) && "bg-theme-300 dark:bg-theme-700"
          )}
        >
          <div className="flex justify-start gap-x-4 items-center">
            <data.icon /> {data.name}
          </div>
        </Link>
      ))}
    </div>
  );
};
