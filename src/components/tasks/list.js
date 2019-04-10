import React from "react";

let OneList = ({ list }) => (
  <div key={list.id} className="List">
    <h1>{list.name}</h1>
  </div>
);

export default OneList;
