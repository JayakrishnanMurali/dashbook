import { NavThemeToggle } from "@/components/common/navbar";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface iNavProfile {
  isLoggedIn: boolean;
}

export const NavProfile: React.FC<iNavProfile> = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <div className="flex w-full items-center justify-end gap-x-4">
      <NavThemeToggle />
      {!isLoggedIn ? (
        <Link
          href={routes.signIn}
          className={cn(buttonVariants({ size: "sm" }), "px-4")}
        >
          Sign in
        </Link>
      ) : (
        <Link
          href={routes.dashboard}
          className={cn(buttonVariants({ size: "sm" }), "px-4")}
        >
          Go to app
        </Link>
      )}
    </div>
  );
};
