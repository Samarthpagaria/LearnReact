import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h1>
        <p className="text-lg text-gray-700">
          User ID: <span className="font-medium text-indigo-600">{userid}</span>
        </p>
      </div>
    </div>
  );
}

export default User;
