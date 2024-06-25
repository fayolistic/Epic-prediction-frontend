/* eslint-disable react-hooks/exhaustive-deps */
import epicLogo from "../../assets/Epic-prediction-logo.png";
import "./HeaderStyle.tsx";
import HeaderStyle from "./HeaderStyle.tsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <div className="header-inner">
          <div className="logo-wrapper">
            <Link to={"/"}>
              <img
                src={epicLogo}
                alt="epic-logo"
                className="epic-header-logo"
              />
            </Link>
          </div>
          <div className="header-right-btn-wrapper">
            <i className="fa-solid fa-bars small-screen-icon"></i>
            <Link to="/signup" className="header-right-signup-btn big-screen">
              SignUp
            </Link>
            <Link to="/login" className="header-right-login-btn big-screen">
              Login
            </Link>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
