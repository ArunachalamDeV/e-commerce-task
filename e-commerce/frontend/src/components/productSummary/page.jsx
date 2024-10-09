import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sum.css";
const OrderSummary = () => {
  const navigate = useNavigate();
  function generateUUID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

  const [order, setOrder] = useState({
    orderId: generateUUID(),
    orderDate: "2024-10-08",
    customerDetails: {
      customerName: JSON.parse(localStorage.getItem("name")),
      customerEmail:JSON.parse(localStorage.getItem("email")),
      shippingAddress: {
        street: "1234 Elm Street",
        city: "Metropolis",
        state: "New York",
        zipCode: "10001",
        country: "USA",
      },
    },
    //     {
    //       "productName": "Smartwatch",
    //       "productDescription": "Water-resistant smartwatch with heart rate monitor and GPS",
    //       "productImage": "/static/media/smartwatch.8fdcb16f13072a7daa0b.png",
    //       "originalPrice": 10000,
    //       "discountPrice": 1000,
    //       "sellingPrice": 9000,
    //       "quantity": 200,
    //       "uom": "pcs",
    //       "hsnCode": "85176290",
    //       "adQty": 1
    //     },
    //     {
    //       "productName": "Laptop",
    //       "productDescription": "High-performance laptop with Intel i7 processor and 16GB RAM",
    //       "productImage": "data:image/png;base64,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",
    //       "originalPrice": 80000,
    //       "discountPrice": 7000,
    //       "sellingPrice": 73000,
    //       "quantity": 50,
    //       "uom": "pcs",
    //       "hsnCode": "84713010",
    //       "adQty": 1
    //     },
    //     {
    //       "productName": "Smartphone",
    //       "productDescription": "Latest 5G smartphone with 6.5-inch AMOLED display and 128GB storage",
    //       "productImage": "data:image/png;base64,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",
    //       "originalPrice": 50000,
    //       "discountPrice": 5000,
    //       "sellingPrice": 45000,
    //       "quantity": 100,
    //       "uom": "pcs",
    //       "hsnCode": "85171200",
    //       "adQty": 1
    //     }    
    // ],
    products:JSON.parse(localStorage.getItem("cart")),
    taxes: 10, // 10% tax
    discount: { discountCode: "SALE10", discountAmount: 10000 },
  });
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("cart"));
    if (!savedOrder) navigate("/");
    setOrder((preValue) => {
      preValue.products = savedOrder;
      return preValue;
    });

  },[]);
  // Calculate total prices for each product
  const calculateTotal = () => {
    return order.products.reduce((total, product) => {
      return total + product.adQty * product.sellingPrice;
    }, 0);
  };

  const subTotal = calculateTotal();
  const taxAmount = (order.taxes / 100) * subTotal;
  // const totalAmount =
  //   subTotal + taxAmount + order.shippingCost - order.discount.discountAmount;
    const totalAmount = order.products.reduce((total, product) => {
      return total + product.adQty * product.sellingPrice;
    }, 0);
  return  (
    <div className="order-summary" style={{
      marginTop: "20px",
    }}>
      <h1>Order Summary</h1>

      <div className="order-info">
        <p>
          <strong>Order ID:</strong> {order.orderId}
        </p>
        <p>
          <strong>Order Date:</strong> {order.orderDate}
        </p>
        <p>
          <strong>Customer:</strong> {order.customerDetails.customerName}
        </p>
        <p>
          <strong>Email:</strong> {order.customerDetails.customerEmail}
        </p>
      </div>
      <div className="products">
        <h2>Products:</h2>
        {order.products.map((product, index) => (
          <div key={index} className="product-item">
            <p>
              <strong>{product.productName}</strong>
            </p>
            <p>Quantity: {product.adQty}</p>
            <p>Price: ₹{product.sellingPrice}</p>
            <p>Total: ₹{product.adQty * product.sellingPrice}</p>
          </div>
        ))}
      </div>
      <div className="pricing-details">
        <h2>Pricing Details:</h2>
        <p>
          <strong>Subtotal:</strong> ₹{subTotal}
        </p>
        <p>
          <strong>Tax ({order.taxes}%):</strong> ₹{taxAmount}
        </p>
        <p>
          <strong>Discount:</strong> - ₹{order.discount.discountAmount}
        </p>
        <h3>
          <strong>Total Amount:</strong> ₹{totalAmount}
        </h3>
      </div>
    </div>
  );
};

export default OrderSummary;
