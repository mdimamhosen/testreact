import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between  w-11/12 mx-auto py-3">
      <div>Imam</div>
      <ul className="flex justify-center items-center gap-x-4">
        <li>Home</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
