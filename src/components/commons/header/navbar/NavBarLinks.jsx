import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SearchButton} from "../search/SearchButton.jsx";
import {useContext} from "react";
import {GlobalContext} from "../../../../contexts/global/GlobalContext.js";
import {useLocalStorage} from "../../../../hooks/useLocalStorage.js";

export const NavBarLinks = () => {

  const {logged, setLogged, user} = useContext(GlobalContext);
  const {clearLocalStorage} = useLocalStorage();

  const handleLogout = () => {
    setLogged(false);
    clearLocalStorage();
  }

  return (
    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav className='roboto-medium text-uppercase gap-3 align-items-center fs-5'>
        {
          !logged
            ? <>
              <NavLink to="/" className={`nav-link text-primary-color`}>
                Home
              </NavLink>
              <NavLink to="/auth/login" className={`nav-link text-primary-color`}>
                Login
              </NavLink>
              <NavLink to="/auth/register" className={`nav-link text-primary-color`}>
                Register
              </NavLink>
            </>
            : <>
              <div className={`nav-link text-primary-color`}>
                Hola, {user.name}!
              </div>
              <NavLink to="/dashboard" className={`nav-link text-primary-color`}>
                Publicar
              </NavLink>
              <Nav.Link onClick={handleLogout} className={`nav-link text-primary-color`}>
                Logout
              </Nav.Link>
            </>
        }

        <SearchButton/>
      </Nav>
    </Navbar.Collapse>
  );
};