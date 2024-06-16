import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style.css';

const URL = process.env.REACT_APP_URL;

const RegisterPage = () => {
    const [UserLogin, setUserLogin] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        try{
            await axios.post(`${URL}/register`,{
                UserLogin,
                UserPassword
            })
            navigate("/login")
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
     <div className="wrapper_login">
      <div className="title_login">
        <label htmlFor="">Регистрация</label>
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
          <button type="submit" className="login_button">Зарегистрироваться</button>
          <Link to={"/login"}>
            <button className="login_button">Вход</button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default RegisterPage;
