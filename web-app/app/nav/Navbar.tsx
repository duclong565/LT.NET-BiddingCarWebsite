import React from "react";

import Search from "./Search";
import Logo from "./Logo";
import LoginButon from "./LoginButon";
import { getCurrentUser } from "../actions/authActions";
import UserActions from "./UserActions";

const Navbar = async () => {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md ">
      <Logo />
      <Search />
      {user ? <UserActions user={user} /> : <LoginButon />}
    </header>
  );
};

export default Navbar;
