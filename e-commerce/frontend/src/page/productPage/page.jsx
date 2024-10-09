import React from "react";
import Nav from "../../components/navbar/nav";
import ProductList from "../../components/productList/productList";
import List from "../../utils/product";
import { useState, useEffect } from "react";
export default function Page() {
  const [productList, setProductList] = useState(List);
  const [isChange,setChange] = useState(true)
  const [cartCount,setCount] = useState(0)
  useEffect(() => {
    setProductList(productList);
    let items = JSON.parse(localStorage.getItem("cart"));
    if(items) setCount(items.length);
  },[isChange]);
  return (

     (
      <div
        style={{
          maxWidth: "1220px",
          height: "100vh",
          width: "100%",
          padding: "10px",
          position: "relative",
        }}
      >
        <Nav
          callback={({ data, searchTerm }) => {
          
            if (searchTerm.length > 1 && data.length >0) setProductList(data);
            else setProductList(List);
          }}
       
          List={List}
          cartCount={cartCount}
        />
        <ProductList productList={productList} setIsChanged={setProductList} callback={()=>{
          setChange(!isChange)
        }} />
      </div>
    )
  );
}
