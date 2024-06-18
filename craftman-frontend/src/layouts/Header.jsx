// import React from "react";

import Logo from "../components/Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="bg-neutral-700 p-4 flex justify-center items-center  ">
      <div className="container flex justify-between items-center w-[80%]">
        <Logo/>
      </div>
      <div className="justify-self-end">
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
