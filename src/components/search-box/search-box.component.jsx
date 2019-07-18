import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, onEventChange }) => {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} onChange={onEventChange} />
    </div>
  );
};

