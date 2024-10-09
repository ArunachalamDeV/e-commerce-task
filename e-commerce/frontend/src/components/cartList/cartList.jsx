import React from "react";
import product from "../../utils/product";
import ProductCardList from "./productCardList";
import image from "../../utils/image";
import { useNavigate } from "react-router-dom";
export default function cartList({ list, callback }) {
  return (
    list.length > 0 && (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginTop: "10px",
            maxHeight: "calc(100vh - 100px)",
            minHeight: "calc(100vh - 100px)",
            width: "735px",
            overflowY: "scroll",
          }}
        >
          {list.map((product) => (
            <ProductCardList
              product={product}
              image={image}
              callback={callback}
            />
          ))}
        </div>
        <div
          style={{
            width: "calc(100% - 735px)",
          }}
        >
          <ProductSummary list={list} />
        </div>
      </div>
    )
  );
}

const ProductSummary = ({ list }) => {
  const router = useNavigate();
  const totalPrice = list.reduce((accumulator, product) => {
    return accumulator + product.sellingPrice * product.adQty;
  }, 0);
  return (
    <div
      style={{
        marginTop: "10px",
        height: "150px",
        backgroundColor: "#f1f1f1",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: "18px",
        fontWeight: "bold",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Cart Summary</h1>
      <p>Total: ₹{totalPrice}</p>
      <p>Payment Mode: Cash</p>
      <button
        style={{
          backgroundColor: "#FF4800",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          const token = localStorage.getItem("token")
          if (!token) router("/signup");
            fetch("http://localhost:3333/check",{
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.status == "success") {
                  router("/productSummary")
                } else {
                  router("/signup");
                }
              });
        }}
      >
        Proceed to Pay
      </button>
    </div>
  );
};
