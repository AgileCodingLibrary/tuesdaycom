import React, { useState } from "react";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];
export default function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const handleClick = (f) => {
    setCurrentFilter(f);
  };
  return (
    <div className='project-filter'>
      <p>Filter By: </p>
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
