import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

export default function GitHubUserId() {
  const data = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const inputOnChangeFunction = (event) => {
    setInputValue(event.target.value);
  };

  const buttonOnclickFunction = () => {
    if (inputValue) {
      navigate(`/github/${inputValue}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 to-gray-900 p-6">
      <div className="max-w-full lg:max-w-4xl mx-auto">
        <div className="mb-10">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search GitHub User
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              value={inputValue}
              onChange={inputOnChangeFunction}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="Search GitHub User"
              required
            />
            <button
              type="submit"
              onClick={buttonOnclickFunction}
              className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>

        {/* Conditional Rendering based on fetched data */}
        {data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            <div className="w-full">
              <img
                className="object-contain w-full rounded-lg h-60 md:h-80 shadow-lg"
                src={data.avatar_url}
                alt="GitHub profile"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg text-gray-900 dark:text-white">
              <h5 className="mb-4 text-2xl font-bold tracking-tight">
                GitHub Information
              </h5>
              <p className="mb-2 text-sm md:text-lg">
                <b>User Name:</b> {data.name || "Unknown User"}
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>User Login:</b> {data.login || "Unknown Login"}
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>User ID:</b> {data.id || "Unknown ID"}
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>URL:</b>{" "}
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {data.html_url || "#"}
                </a>
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>Followers:</b> {data.followers || "No followers"}
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>Following:</b> {data.following || "No following"}
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>Bio:</b> {data.bio || "No bio available"}
              </p>
              <p className="mb-2 text-sm md:text-lg">
                <b>Location:</b> {data.location || "Location not available"}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            <p className="text-xl">User not found. Please check the username and try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Fetch GitHub data with error handling
export const fetchGitHubData = async ({ params }) => {
  const { gitHubUserId } = params;
  const response = await fetch(`https://api.github.com/users/${gitHubUserId}`);
  if (!response.ok) {
    // Return null or empty object to handle user not found
    return null;
  }
  return response.json();
};
