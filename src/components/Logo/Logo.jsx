import "./Logo.css";
import logotip from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logotip} alt="Website logo" />
      </NavLink>
    </div>
  );
}