// Sidebar.tsx

import React from "react";
import Link from "next/link";


const Navbar: React.FC = () => {
  return (
    <nav className=" hidden md:flex flex-col bg-red-500 h-full w-[4.375rem] fixed top-0 right-0 overflow-y-auto shadow-sm">
      <ul className="mt-4">
          <li className="mb-2">
            <Link href="/dashboard" >Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link href="/inventory" >Inventory</Link>
          </li>
          <li className="mb-2">
            <Link href="/reports" >Reports</Link>
          </li>
         
        </ul>
      
    </nav>
  );
};

export default Navbar;