import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold p-4">Admin Dashboard</h1>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/create">Create</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/read">Read</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/update">Update</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/delete">Delete</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
