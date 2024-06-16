import axios from "axios";
import React, { useState } from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

const AddProduct = () => {
  const [ProductName, setProductName] = useState<string>("");
  const [ProductCategory, setProductCategory] = useState<string>("");
  const [ProductCost, setProductCost] = useState<string>("");
  const [ProductPhoto, setProductPhoto] = useState<File | null>(null);
  const navigate = useNavigate()

  const hendleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ProductName", ProductName);
    formData.append("ProductCategory", ProductCategory);
    formData.append("ProductCost", ProductCost);
    formData.append("ProductPhoto", ProductPhoto!);

    try {
      await axios.post(`${URL}/create/product`, formData);
      navigate("/product")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <div className="wrapper">
        <form action="" onSubmit={hendleSubmit} className="form_addProduct">
          <div className="title_main">
            <label htmlFor="">Добавление товара</label>
          </div>
          <div className="input_div">
            <input
              type="text"
              value={ProductName}
              placeholder="Введите название"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="input_div">
            <input
              type="text"
              value={ProductCategory}
              placeholder="Введите тип"
              onChange={(e) => setProductCategory(e.target.value)}
              required
            />
          </div>
          <div className="input_div">
            <input
              type="text"
              value={ProductCost}
              placeholder="Введите цену"
              onChange={(e) => setProductCost(e.target.value)}
              required
            />
          </div>
          <div className="input_div">
            <input
              type="file"
              onChange={(e) =>
                setProductPhoto(e.target.files ? e.target.files[0] : null)
              }
              required
            />
          </div>
          <div className="div_btn">
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
