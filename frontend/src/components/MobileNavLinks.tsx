import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/user-profile"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center font-bold hover:bg-gray-500"
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
