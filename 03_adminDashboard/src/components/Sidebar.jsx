import React from 'react'

export const Sidebar = () => {
    return (
      <aside className="w-64 bg-blue-900 text-white p-4 h-full cursor-pointer">
        <ul>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">Dashboard</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">Users</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">Settings</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">Reports</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">Analytics</li>
        </ul>
      </aside>
    );
  };

export default Sidebar