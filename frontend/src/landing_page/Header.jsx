import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container mb-2">
          <Link class="navbar-brand" to="/">
            <img
              src="./images/logo.svg"
              alt="Logo"
              style={{ width: "25%" }}
            />
          </Link>
        
          <form className="flex p-2 gap-2" role="search">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active me-3" aria-current="page" to="/signup">
                    SignUp
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active me-3" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active me-3" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active me-3" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active me-3" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}
