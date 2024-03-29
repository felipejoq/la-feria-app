import {NavLink} from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink to="/" className="navbar-brand fs-3 site-name px-4">
      <h1>
        <i className="bi bi-cart4"></i> La Feria
      </h1>
    </NavLink>
  );
};