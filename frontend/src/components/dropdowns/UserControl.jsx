import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { LogOutIcon, Settings, UserIcon } from "lucide-react";

export function UserControl() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" h-8 w-8 flex justify-center items-center rounded-full bg-blue-700">
          <h2 className=" text-lg font-medium text-white">
            {user.username.charAt(0).toUpperCase()}
          </h2>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>User Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link
              to="/profile"
              className=" flex justify-center items-center gap-4"
            >
              <UserIcon />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className=" flex justify-center items-center gap-4"
            >
              <LogOutIcon /> <p>Logout</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/" className=" flex justify-center items-center gap-4">
              <Settings />
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
