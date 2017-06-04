import React from 'react';

const Header = (title) => (
  <div id="title-bar">
    <span id="title">
      {title}
    </span>
    {this.props.children}
  </div>
);

export default Header;
