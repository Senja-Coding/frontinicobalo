import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
