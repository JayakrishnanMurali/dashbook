import { DashboardProfile } from "./nav-dashboard-profile";
import { NavLogo } from "./nav-logo";
import { NavSections } from "./nav-section-items";
import { routes } from "@/config/routes";
import { User } from "@prisma/client";

interface Props {
  user: User;
}

export const DashboardSideNav: React.FC<Props> = ({ user }) => {
  return (
    <nav className="h-full w-full ">
      <NavLogo redirect={routes.dashboard} />
      <div className="pt-16 pb-4 h-full w-full flex flex-col justify-between  gap-y-4">
        <div className="flex flex-col gap-y-4">
          <NavSections />
        </div>

        <DashboardProfile user={user} />
      </div>
    </nav>
  );
};
