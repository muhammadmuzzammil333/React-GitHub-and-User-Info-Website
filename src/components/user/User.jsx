import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function User() {
  const userNavigate = useNavigate();
  const [userInputValue, setUserInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // New state for error handling
  const { userId } = useParams();

  const userInputOnChangeFunction = (e) => {
    setUserInputValue(e.target.value);
    setErrorMessage(''); // Clear error when typing
  };

  const userButtonOnclickFunction = () => {
    if (!userInputValue) {
      // If input is empty, set an error message and prevent navigation
      setErrorMessage('Please enter a username.');
    } else {
      userNavigate(`/user/${userInputValue}`);
    }
  };

  return (
    <div className="max-w-full lg:max-w-4xl mx-auto">
      <div className="mb-10">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search User Name
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
            value={userInputValue}
            onChange={userInputOnChangeFunction}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            placeholder="Search User Name"
            required
          />
          <button
            type="submit"
            onClick={userButtonOnclickFunction}
            className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}
      </div>

      <div className="text-4xl text-center p-7 text-white bg-slate-800">
        User: {userId}
      </div>
    </div>
  );
}
