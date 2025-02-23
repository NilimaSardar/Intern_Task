import { useState, useMemo } from "react";

const demoData = [
  { fullName: "John Nepal", email: "john@example.com", phone: "1234567890", country: "USA", date: "2024-06-01" },
  { fullName: "Rajesh Shrestha", email: "rajesh@example.com", phone: "2345678901", country: "Canada", date: "2024-05-15" },
  { fullName: "Ali Khan", email: "ali@example.com", phone: "3456789012", country: "Pakistan", date: "2024-07-10" },
  { fullName: "Meera Patel", email: "meera@example.com", phone: "4567890123", country: "India", date: "2024-04-25" },
  { fullName: "Carlos P.", email: "carlos@example.com", phone: "5678901234", country: "Mexico", date: "2024-08-12" },
  { fullName: "Anna Iva", email: "anna@example.com", phone: "6789012345", country: "Russia", date: "2024-03-20" },
  { fullName: "Sara ali", email: "sara@example.com", phone: "7890123456", country: "USA", date: "2024-09-05" },
  { fullName: "Tom Brown", email: "tom@example.com", phone: "8901234567", country: "Canada", date: "2024-02-18" },
  { fullName: "Ling Wu", email: "ling@example.com", phone: "9012345678", country: "China", date: "2024-01-30" },
  { fullName: "Resham Karki", email: "resham@example.com", phone: "0123456789", country: "Morocco", date: "2024-06-18" },
];

export default function DataTable() {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedFilteredData = useMemo(() => {
    let filteredData = demoData.filter((item) =>
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCountry ? item.country === filterCountry : true)
    );

    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filteredData;
  }, [searchTerm, filterCountry, sortConfig]);

  const totalPages = Math.ceil(sortedFilteredData.length / itemsPerPage);
  const currentData = sortedFilteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="grid place-items-center h-screen w-[80%] p-6 mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-2xl p-2 w-full md:w-1/3"
        />
        <select
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
          className="border rounded-2xl p-2 w-full md:w-1/4"
        >
          <option value="">Filter by Country</option>
          {[...new Set(demoData.map((item) => item.country))].map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">S.N</th>
            <th
              className="p-3 border cursor-pointer hover:bg-gray-200"
              onClick={() => requestSort("fullName")}
            >
              Full Name {sortConfig.key === "fullName" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone Number</th>
            <th className="p-3 border">Country</th>
            <th
              className="p-3 border cursor-pointer hover:bg-gray-200"
              onClick={() => requestSort("date")}
            >
              Date {sortConfig.key === "date" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((item, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="p-2 border">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="p-2 border">{item.fullName}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.phone}</td>
                <td className="p-2 border">{item.country}</td>
                <td className="p-2 border">{item.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-4 text-center">No data found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center w-full">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-2xl bg-blue-500 text-white disabled:opacity-50 hover:bg-blue-600"
        >
          Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-2xl ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-2xl bg-blue-500 text-white disabled:opacity-50 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
