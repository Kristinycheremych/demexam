import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const order = location.state.order;

  return (
    <>
      <Header />
      <div className="order_confirmation">
        <h2>Заказ подтвержден</h2>
        <p>Номер заказа: {order._id}</p>
        <p>Дата заказа: {new Date(order.orderDeliveryDate).toLocaleDateString()}</p>
        <p>Общая сумма: {order.totalAmount.toFixed(2)}</p>
        <h3>Товары:</h3>
        <ul>
          {order.products.map((product: any, index: any) => (
            <div key={index}>
              <p>Количество: {product.quantity}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrderConfirmationPage;
