import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;
