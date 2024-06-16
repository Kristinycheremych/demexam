import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

const URL = process.env.REACT_APP_URL;

const LoginPage = () => {
  const [UserLogin, setUserLogin] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/login`, {
        UserLogin,
        UserPassword,
      });
      if (response.data.user) {
        navigate("/product");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="wrapper_login">
        <div className="title_login">
          <label htmlFor="">Вход</label>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="div_input_login">
            <input
              type="text"
              value={UserLogin}
              className="input_login"
              onChange={(e) => setUserLogin(e.target.value)}
              placeholder="Логин"
              required
            />
          </div>
          <div className="div_input_login">
            <input
              type="password"
              value={UserPassword}
              className="input_login"
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Пароль"
              required
            />
          </div>
          <div className="div_btn_login">
            <button type="submit" className="login_button">
              Войти
            </button>
            <Link to={"/register"}>
              <button className="login_button">Регистрация</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
