import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Order } from "./OrderInterface";
import axios from "axios";

const URL = process.env.REACT_APP_URL;

const OrderPage = () => {
  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/get/order`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <Header />
      <div className="wrapper_orders">
        <h2>Заказы</h2>
        {data.map((order) => {
          return (
            <div key={order._id} className="div_content_order">
              <p>Номер заказа: {order._id}</p>
              <ul>
                {order.products.map((product, index) => (
                  <div key={index}>
                    <div className="image_content">
                      <img
                        src={`${URL}${product.productId.ProductPhoto}`}
                        alt={product.productId.ProductName}
                      />
                    </div>
                    <p>Товар: {product.productId.ProductName}</p>
                    <p>Количество: {product.quantity}</p>
                  </div>
                ))}
              </ul>
              <p>Общая сумма: {order.totalAmount.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderPage;
