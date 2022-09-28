import { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

function LoginRegisterMenu() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-light font-weight-bold"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <LoginIcon></LoginIcon>
          LOGIN
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/alogin">
            ADMIN
          </Link>
          <Link className="dropdown-item" to="/slogin">
            SELLER
          </Link>
          <Link className="dropdown-item" to="/clogin">
            CUSTOMER
          </Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-light font-weight-bold"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <AppRegistrationIcon></AppRegistrationIcon>
          REGISTER
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/regsupplier">
            SELLER
          </Link>
          <Link className="dropdown-item" to="/register">
            CUSTOMER
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default LoginRegisterMenu;
