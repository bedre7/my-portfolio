import React from "react";

const TimeAndDate = () => {
  const date = new Date();
  const hours = (date.getHours() % 12).toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const AMorPM = date.getHours() >= 12 ? "PM" : "AM";
  const time = `${hours}:${minutes} ${AMorPM}`;
  const month = date.toLocaleDateString("en-US", { month: "numeric" });
  const dayOfMonth = date
    .toLocaleDateString("en-US", { day: "numeric" })
    .padEnd(2, "0");
  const year = date.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <div className="hidden cursor-pointer rounded-md px-3 transition-all hover:bg-gray-700 md:block">
      <p className="text-sm text-white">{time}</p>
      <p className="text-sm text-white">
        {month}/{dayOfMonth}/{year}
      </p>
    </div>
  );
};

export default TimeAndDate;
