import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

let AppHeader = () => (
  <div>
    <div id="home">
      <Header textAlign="center" size="huge">
        <Link class="ui  linkedin icon button" to="/">
          <Icon name="home" />
        </Link>
      </Header>
    </div>
  </div>
);

export default AppHeader;
