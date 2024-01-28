// Sidebar.tsx

import React from "react";
import Link from "next/link";

const   Profilebar: React.FC = () => {
  return (
    <nav className=" hidden md:flex flex-col bg-[#283342;] h-full w-80 fixed top-0 left-0 overflow-y-auto shadow-sm">
      <ul className="mt-4">
          <li className="mb-2">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link href="/inventory">Inventory</Link>
          </li>
          <li className="mb-2">
            <Link href="/reports" >Reports</Link>
          </li>
         
        </ul>
    </nav>
  );
};

export default Profilebar;