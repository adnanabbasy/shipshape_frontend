import React from "react";
import Search from "./Search";
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navi_shipshape">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="../../images/logo.png" alt="" /> SHIPSHAPE
            </Link>
            <Search />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 ms-auto">
                
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/podcast">
                    Podcast
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    
  );
}

export default Header;
