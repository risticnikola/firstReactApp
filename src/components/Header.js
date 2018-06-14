import React, { Fragment as Fr } from "react";

const Header = ({ tagline, year }) => (
  <Fr>
    <h1>{tagline}</h1>
    <h2>{year}</h2>
  </Fr>
);

export default Header;
