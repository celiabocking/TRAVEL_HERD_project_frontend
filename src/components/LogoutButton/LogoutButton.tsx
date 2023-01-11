import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className ="button-24" onClick={() => logout({ returnTo: window.location.origin })}>
      log out
    </button>
  );
};

export default LogoutButton;