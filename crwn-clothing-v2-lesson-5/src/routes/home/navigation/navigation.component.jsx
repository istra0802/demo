import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo  } from "../../../assets/crown.svg"
import "./navigation.styles.scss"
export default function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
        
        <CrwnLogo className="logo"></CrwnLogo>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-links" to = '/shop'>
                SHOP
            </Link>
            <Link className="nav-links" to = '/signin'>
                SIGN IN
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
