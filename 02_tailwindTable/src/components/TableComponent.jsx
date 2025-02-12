import React, { useState } from "react";

const demoData = [
  { id: 1, name: "Shikshya Nepal", email: "shikshya@example.com", phone: "123-456-7890", country: "USA", date: "2024-02-12" },
  { id: 2, name: "Bir Bahadur Magar", email: "bir@example.com", phone: "555-666-7777", country: "Canada", date: "2023-12-10" },
  { id: 3, name: "Ram Thapa", email: "ram@example.com", phone: "987-654-3210", country: "UK", date: "2024-01-25" },
  { id: 4, name: "Aman Joshi", email: "aman@example.com", phone: "111-222-3333", country: "Australia", date: "2024-03-05" },
];

const TableComponent = () => {
  const [data, setData] = useState(demoData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-6">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">S.N</th>
            <th className="p-3 border cursor-pointer" onClick={() => sortData("name")}>
              Full Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone Number</th>
            <th className="p-3 border">Country</th>
            <th className="p-3 border cursor-pointer" onClick={() => sortData("date")}>
              Date {sortConfig.key === "date" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border hover:bg-gray-50">
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border">{item.name}</td>
              <td className="p-3 border">{item.email}</td>
              <td className="p-3 border">{item.phone}</td>
              <td className="p-3 border">{item.country}</td>
              <td className="p-3 border">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
