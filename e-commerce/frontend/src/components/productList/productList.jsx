import React from "react";
import image from "../../utils/image";
import { useState } from "react";
import SideNav from "./component/sideNav";
import ProductCardList from "./component/productCardList";
export default function Page({ productList, setIsChanged, callback }) {
  const [showColumn, setShowColumn] = useState(true);
  const highestPriceProduct =
    productList.length > 3
      ? productList.reduce((maxProduct, product) => {
          return product.sellingPrice > maxProduct.sellingPrice
            ? product
            : maxProduct;
        })
      : { sellingPrice: 0 };
  const [highPrice, setHighPrice] = useState({
    min: 0,
    max: highestPriceProduct.sellingPrice,
  });

  const style = {
    productList: showColumn
      ? {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          maxWidth: "1140px",
          width: "100%",
          rowGap: "12px",
          columnGap: "10px",
          padding: "10px",
        }
      : {
          display: "flex",
          flexDirection: "column",
          maxWidth: "1140px",
          width: "100%",
          gap: "10px",
          padding: "10px",
        },
  };
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        gap: "10px",
      }}
    >
      <SideNav
        image={image}
        showColumn={showColumn}
        setShowColumn={setShowColumn}
        highPrice={highPrice}
        setIsChanged={setIsChanged}
      />

      <div style={style.productList}>
        {productList.map((product) => {
          return showColumn ? (
            <ProductCard
              product={product}
              setIsChanged={setIsChanged}
              callback={callback}
            />
          ) : (
            <ProductCardList
              product={product}
              image={image}
              setIsChanged={setIsChanged}
              callback={callback}
            />
          );
        })}
      </div>
    </div>
  );
}

const ProductCard = ({ product, setIsChanged, callback }) => {
  const style = {
    parent: {
      width: "250px",
      height: "400px",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      marginBottom: "10px",
      marginLeft: "10px",
      borderRadius: "10px",
      gap: "20px",
    },
    img: {
      minWidth: "180px",
      maxWidth: "180px",
      minHeight: "180px",
      maxHeight: "180px",
      borderRadius: "5px",
      objectFit: "cover",
      marginBottom: "10px",
      marginLeft: "10px",
    },
    child: {
      marginRight: "auto",
    },
  };
  const calDisCount = (product) => {
    const discount = product.originalPrice - product.sellingPrice;
    return (
      <p style={{ color: "#FF4800", fontWeight: "bold" }}>
        {Math.round((discount / product.originalPrice) * 100)}% Off
      </p>
    );
  };

  return (
    <div style={style.parent}>
      <img src={product.productImage} alt="" style={style.img} />
      <p style={{ ...style.child, color: "#253D4E", fontWeight: "bold" }}>
        {product.productName}
      </p>
      <p style={style.child}>
        By <span style={{ color: "#FF4800" }}> SNS IHUB </span>
      </p>
      <div style={{ ...style.child, display: "flex", gap: "10px" }}>
        ₹ {product.sellingPrice}{" "}
        <p>
          {" "}
          ₹<del>{product.originalPrice} </del>{" "}
        </p>{" "}
        {calDisCount(product)}{" "}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "auto",
        }}
      >
        <ProductCardBtn product={product} callback={callback} />
        <IncreaseAndDecreaseButton
          product={product}
          callback={callback}
          setIsChanged={setIsChanged}
        />
      </div>
    </div>
  );
};
const ProductCardBtn = ({ product, callback }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "90px",
        height: "36px",
        cursor: "pointer",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#FF4800",
      }}
    >
      <img
        src={image.cartW}
        style={{
          width: "20px",
          height: "20px",
        }}
        alt=""
      />{" "}
      <p
        style={{
          color: "white",
          fontSize: "18px",
          padding: "0 10px",
        }}
        onClick={() => {
          if (product.adQty == undefined) product.adQty = 1;
          let items = JSON.parse(localStorage.getItem("cart"));
          if (items) {
            items = items.filter(
              (item) => item.productName !== product.productName
            );
            localStorage.setItem("cart", JSON.stringify([product, ...items]));
            console.log(JSON.parse(localStorage.getItem("cart")));
          } else localStorage.setItem("cart", JSON.stringify([product]));
          callback();
        }}
      >
        Add
      </p>
    </div>
  );
};

const IncreaseAndDecreaseButton = ({ product, setIsChanged, callback }) => {
  const handleChangeAdd = () => {
    setIsChanged((preValue) => {
      preValue.map((task) => {
        if (task.productName == product.productName)
          if (task.adQty == undefined) task.adQty = 2;
          else task.adQty += 1;
        return task;
      });
      callback();
      return preValue;
    });
  };
  const handleChangeDecrease = () => {
    setIsChanged((preValue) => {
      preValue.map((task) => {
        if (task.productName == product.productName && task.adQty !== undefined)
          if (task.adQty > 1) task.adQty -= 1;

        return task;
      });
      callback();
      return preValue;
    });
  };
  const style = {
    parent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "36px",
      width: "110px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#FF4800",
    },
    addChild: {
      paddingLeft: "10px",
      paddingBottom: "6px",
      borderRadius: "10px",
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
      textAlign: "center",
      backgroundColor: "#FF4800",
    },
  };
  return (
    <div style={style.parent}>
      <div style={style.addChild} onClick={handleChangeAdd}>
        +
      </div>
      <p
        style={{
          color: "white",
        }}
      >
        {product.adQty == undefined ? 1 : product.adQty}
      </p>
      <div
        style={{ ...style.addChild, paddingRight: "10px", paddingLeft: "0" }}
        onClick={handleChangeDecrease}
      >
        -
      </div>
    </div>
  );
};
