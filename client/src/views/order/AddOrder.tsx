import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Header from "../../components/header/Header";

const URL = process.env.REACT_APP_URL;

const AddOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.ProductCost);

  useEffect(() => {
    setPrice(product.ProductCost * quantity);
  }, [quantity, product.ProductCost]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const order = {
      products: [
        {
          productId: product._id,
          quantity,
        },
      ],
      totalAmount: price,
    };

    try {
      const response = await axios.post(`${URL}/create/order`, order);
      navigate("/orderConfirmationPage", { state: { order: response.data } });
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
      <Header />
      <div className="wrapper_order">
        <div className="">
          <h2>Оформление заказа</h2>
          <div className="image_content">
            <img src={`${URL}${product.ProductPhoto}`} alt={product.ProductName} />
          </div>
          <div className="product_info">
            <div className="product_title">{product.ProductName}</div>
            <div className="product_type">{product.ProductCategory}</div>
            <div className="product_price">{price}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input_quantity">
            <label>Количество:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
          <div className="add_order_button">
            <button type="submit">Оформить заказ</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddOrder;