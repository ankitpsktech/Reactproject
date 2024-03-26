import React, { useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
const Navbar = () => {
  var navigate=useNavigate();
  var location = useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location])
  const clicklogout=()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img src={("cropped-cropped-gk-2-70x53.png")}/> */}
            <strong>PSK TECHNOLOGIES PVT. LTD.</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/"> Home </Link>

              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Web Hosting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Sales & Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Training
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
            {!localStorage.getItem('token')?
            <form className="d-flex">
        
        <Link to="/login"><button className="btn btn-primary mx-2"  type="button">Login</button></Link>
        <Link to="/signup"><button className="btn btn-primary mx-2"  type="button">signup</button></Link>
      </form>:
      <button className="btn btn-primary mx-2" type="button" onClick={clicklogout}>Logout</button>
  }
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
