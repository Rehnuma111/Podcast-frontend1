import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/userAuthContext";

// import React, { useState } from "react";


const Header = () => {

  const { isAuthenticated, handleLogin, handleLogout } =
    useContext(AuthContext);

  console.log(isAuthenticated);

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">

        <div className="container">

          <NavLink to="/home">
            <a className="navbar-brand me-2" href="">
              <img
                src="https://play-lh.googleusercontent.com/vPolbKkiyhKOKD6PY4d4w_qcXFSHRs2TAE4Txw7FWpo-03h5O7xbECqrUWKjY7Tz20tP=w240-h480-rw"
                height={36}
                alt="logo"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </a>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            {isAuthenticated ? (
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >

                <li className="nav-item">
                  <NavLink className="nav-link" to="/publish">Publish</NavLink>
                </li>


                <li className="nav-item">
                  <NavLink className="nav-link" to="/managepodcast">Manage Podcast</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/manageuser">Manage User</NavLink>
                </li>
              </ul>

            ) : (
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
                <li className="nav-item">
                  <NavLink className="nav-link" to="/podcasts">Podcasts</NavLink>
                </li>
              </ul>
            )}


            <div className="d-flex align-items-center">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger px-3 me-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login">
                    <button
                      onClick={handleLogin}
                      type="button"
                      className="btn btn-link px-3 me-2"
                    >
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/signup" style={{ color: "white" }}>
                    <button type="button" className="btn btn-primary me-3">
                      Signup
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>

        </div>

      </nav>

    </>
  );
};

export default Header;