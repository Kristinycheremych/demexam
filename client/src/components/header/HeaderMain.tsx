import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const HeaderMain = () => {
  return (
    <>
      <div className="wrapper_header">
        <ul>
          <Link to={"/login"}>
            <li>Войти</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HeaderMain;
