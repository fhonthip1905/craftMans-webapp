// import React from 'react';

import { Link } from "react-router-dom";
import { BeerIcon } from "./icons";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end ">
        <BeerIcon />
        <span className=" flex text-3xl font-bold">
          <h1 className="text-amber-500">craft</h1>
          <h1>Mans</h1>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
