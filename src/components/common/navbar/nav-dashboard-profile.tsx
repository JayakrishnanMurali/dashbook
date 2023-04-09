import { Icons } from "../icons";
import { UserAvatar } from "../user-avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { absoluteUrl } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface Props {
  user: User;
}

export const DashboardProfile: React.FC<Props> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: "outline" }), "gap-x-2 py-8 ")}
      >
        <UserAvatar user={user} className="w-8 h-8" />
        <div className="truncate flex flex-col text-left">
          <h4 className="text-sm truncate ">{user.name}</h4>
          <p className="text-xs truncate">{user.email} </p>
        </div>
        <div>
          <Icons.expandUp className="w-4 h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild disabled>
          <Link href="/dashboard/settings">
            <Icons.settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild disabled>
          <Link href="/dashboard">
            <Icons.user className="w-5 h-5 mr-2" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer py-2"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: absoluteUrl("signin"),
            });
          }}
        >
          <Icons.logout className="w-5 h-5 mr-2" /> Sign out
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-theme-600">
                {user.email}
              </p>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
