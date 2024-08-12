import React from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { CheckIcon } from "@heroicons/react/24/outline"; // Import CheckIcon from Heroicons

export const Navbar = () => {
  const today = new Date();

  // Generate the range of days for the current month
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });

  return (
    <div className="p-4">
      {/* First div: Navigation */}
      <div className="mb-4 flex items-center justify-center space-x-4">
        {/* Static styled checkbox */}
        <div className="relative flex items-center">
          {/* Custom checkbox box */}
          <div className="w-8 h-8 border-2 border-gray-400 rounded-sm flex items-center justify-center bg-custom-inner-container">
            <CheckIcon className="w-6 h-6 text-white" />{" "}
            {/* Always show check icon */}
          </div>
          <label className="ml-2 text-2xl font-bold text-white">To-do</label>
        </div>
      </div>

      {/* Second div: Horizontal date display */}
      <div className="flex overflow-x-auto py-2">
        {days.map((date) => (
          <div
            key={date}
            className={`flex flex-col justify-evenly text-center p-4 flex-shrink-0 ${
              today.toDateString() === date.toDateString()
                ? "bg-blue-500 text-white"
                : "text-gray-600"
            } border-t-2 border-b-2 border-gray-300`} // Add border above and below
          >
            <span className="text-xl font-semibold">{format(date, "d")}</span>
            <span className="text-xl">
              {format(date, "EEE")} {/* Short day name */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
