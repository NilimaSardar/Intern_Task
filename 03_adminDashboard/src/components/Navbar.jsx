import React from 'react'

export const Navbar = () => {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search..." className="border p-2 rounded cursor-" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Logout</button>
        </div>
      </nav>
    );
  };

export default Navbar