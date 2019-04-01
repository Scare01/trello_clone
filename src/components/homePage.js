import React from "react";
import { Link } from "react-router-dom";

let HomePage = () => (
  <div id="boards">
    <Link to="/addBoard" class="ui  button" id="addBoard">
      Creating a new board...
    </Link>
  </div>
);

export default HomePage;
