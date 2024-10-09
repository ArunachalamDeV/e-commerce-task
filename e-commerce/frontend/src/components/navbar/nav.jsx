import React from "react";
import image from "../../utils/image";
import "./nav.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Page({ callback, List, cartCount }) {
  const route = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [checkToken, setCheckToken] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredProducts = List.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    callback({ data: filteredProducts, searchTerm });
  };

  // Filtered products based on the search term

  useEffect(() => {
    if (searchTerm.length < 0) alert("");
  }, [searchTerm]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3333/check", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          setCheckToken(true);
        } else setCheckToken(false);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    console.log("Form Data Submitted: ", e.target.value); // You can send this to an API
  };

  return (
    <nav class="navbar">
      <div class="nav-left">
        <a href="/" class="logo">
          SNS
        </a>
      </div>
      <div class="nav-center">
        <form class="search-form" onSubmit={handleSubmit}>
          {pathname == "/cart" ? (
            <input
              type="text"
              class="search-input"
              placeholder="Search products..."
            />
          ) : (
            <input
              type="text"
              class="search-input"
              placeholder="Search products..."
              onChange={handleChange}
            />
          )}

          <button type="submit" class="search-btn">
            Search
          </button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
        className="nav-right"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            padding: "10px",
            border: "none",
            gap: "5px",
            borderRadius: "5px",
            backgroundColor: "#FF4800",
          }}
          onClick={() => route("/cart")}
        >
          <div>Cart</div>
          <img
            src={image.cart}
            alt=""
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          {cartCount}
        </div>
        {checkToken ? (
          <p
            onClick={() =>{
              localStorage.removeItem("token");
              route("/signup");
            }}
          >
            Sign Out
          </p>
        ) : (
          <p
            onClick={() => {
              route("/signup");
            }}
          >
            Sign Up
          </p>
        )}
      </div>
    </nav>
  );
}
