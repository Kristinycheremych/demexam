import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <>
      <div className="wrapper_header">
        <ul>
          <Link to={"/product"}>
            <li>Товары</li>
          </Link>
          <Link to={"/order"}>
            <li>Заказы</li>
          </Link>
          <Link to={"/"}>
            <li>Выйти</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
