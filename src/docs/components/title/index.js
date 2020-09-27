import React from "react";

function Title({ title, id }) {
  return (
    <div className="bg-dark text-light text-center py-4 " id={id}>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
