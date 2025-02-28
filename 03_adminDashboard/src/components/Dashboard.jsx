import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine, FaBell } from "react-icons/fa";

const Dashboard = () => {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
                <FaUsers className="text-blue-600 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Total Users</h2>
                  <p className="text-3xl font-bold text-blue-600">1,250</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
                <FaShoppingCart className="text-green-600 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">New Orders</h2>
                  <p className="text-3xl font-bold text-green-600">320</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex items-center">
                <FaDollarSign className="text-yellow-600 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Revenue</h2>
                  <p className="text-3xl font-bold text-yellow-600">Rs.45,000</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <ul className="space-y-2">
                <li className="p-2 border-b">User Hari Krishna registered an account</li>
                <li className="p-2 border-b">New order placed by Ram Thapa</li>
                <li className="p-2 border-b">User Hari Krishna registered an account</li>
                <li className="p-2 border-b">New order placed by Ram Thapa</li>
              </ul>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  };

export default Dashboard;