"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function RoundTableCont() {
  const [roundTables, setRoundTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null); // Track which card is being updated

  const changeStatus = async (id, status) => {
    try {
      if (!window.confirm(`Are you sure you want to ${status} this?`)) return;

      setUpdatingId(id); // Disable buttons for this card

      const url = `/api/round-table/change-status`;
      await axios.post(url, { id, status });

      setRoundTables((prev) => prev.filter((val) => val.id !== id));

      toast.success(`${status} has been done`);
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, action not completed");
    } finally {
      setUpdatingId(null); // Re-enable buttons
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `/api/round-table/get-all-record`;
        const response = await axios.post(url);
        setRoundTables(response.data.data || []);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-white p-4">Loading...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

  return (
    <section className="py-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="px-6">
        <h2 className="text-white text-xl font-bold mb-4">Host RoundTable</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {roundTables.length === 0 ? (
            <p className="text-white">No round tables found.</p>
          ) : (
            roundTables.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-cyan-500/20 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={
                      item.logo_image?.startsWith("/uploads")
                        ? item.logo_image
                        : `/uploads/${item.logo_image}`
                    }
                    alt={item.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.email}</p>
                  </div>
                </div>

                <div className="text-gray-300 text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-cyan-400">Package:</span>{" "}
                    {item.package}
                  </p>
                  <p>
                    <span className="font-semibold text-cyan-400">Date:</span>{" "}
                    {item.date}
                  </p>
                  <p>
                    <span className="font-semibold text-cyan-400">Status:</span>{" "}
                    {item.status === "payment done, but pending from admin"
                      ? "pending"
                      : item.status}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={updatingId === item.id}
                      onClick={() => changeStatus(item.id, "approved")}
                    >
                      {updatingId === item.id ? "Updating..." : "Approve"}
                    </button>
                    <button
                      className="bg-red-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={updatingId === item.id}
                      onClick={() => changeStatus(item.id, "declined")}
                    >
                      {updatingId === item.id ? "Updating..." : "Decline"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
