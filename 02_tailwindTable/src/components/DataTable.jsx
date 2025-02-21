import { useState, useMemo } from "react";

const demoData = [
  { id: 1, fullName: "John Doe", email: "john@example.com", phone: "1234567890", country: "USA", date: "2024-02-01" },
  { id: 2, fullName: "Jane Smith", email: "jane@example.com", phone: "2345678901", country: "Canada", date: "2024-01-15" },
  { id: 3, fullName: "Alice Johnson", email: "alice@example.com", phone: "3456789012", country: "Nepal", date: "2024-03-10" },
  { id: 4, fullName: "Bob Brown", email: "bob@example.com", phone: "4567890123", country: "USA", date: "2024-02-20" },
  { id: 5, fullName: "Charlie Lee", email: "charlie@example.com", phone: "5678901234", country: "Nepal", date: "2024-01-05" },
  { id: 6, fullName: "Diana King", email: "diana@example.com", phone: "6789012345", country: "Canada", date: "2024-03-01" },
  { id: 7, fullName: "Ethan Wright", email: "ethan@example.com", phone: "7890123456", country: "USA", date: "2024-02-10" },
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    let data = [...demoData];

    if (searchTerm) {
      data = data.filter((item) => item.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (countryFilter) {
      data = data.filter((item) => item.country === countryFilter);
    }

    if (sortField) {
      data.sort((a, b) => {
        if (sortField === "date") {
          return sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }
        return sortOrder === "asc"
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField]);
      });
    }

    return data;
  }, [searchTerm, countryFilter, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-6 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-64"
        />
        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-48"
        >
          <option value="">All Countries</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Nepal">Nepal</option>
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">S.N</th>
            <th
              className="p-2 border cursor-pointer"
              onClick={() => {
                setSortField("fullName");
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
              }}
            >
              Full Name {sortField === "fullName" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone Number</th>
            <th className="p-2 border">Country</th>
            <th
              className="p-2 border cursor-pointer"
              onClick={() => {
                setSortField("date");
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
              }}
            >
              Date {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length ? (
            paginatedData.map((item, index) => (
              <tr key={item.id} className="text-center hover:bg-gray-50">
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

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
