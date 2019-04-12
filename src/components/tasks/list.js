import React from "react";

let OneList = ({ list, clickDeleteList }) => (
  <div key={list.id} className="List">
    <h1>{list.name}</h1>
    <button onClick={clickDeleteList}>del</button>
  </div>
);

export default OneList;
