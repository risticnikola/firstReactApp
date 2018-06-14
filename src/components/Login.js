import React from "react";

const Login = props => (
  <nav className="login">
    <h2>Login</h2>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In Facebook
    </button>
  </nav>
);

export default Login;
