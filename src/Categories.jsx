import React from "react";

const Categories = ({ categoryItems, filterItems }) => {
  return (
    <div className="btn-container">
      {categoryItems.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
