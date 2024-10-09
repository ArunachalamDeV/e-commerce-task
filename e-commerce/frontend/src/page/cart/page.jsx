import React from "react";
import Nav from "../../components/navbar/nav";
import CartList from "../../components/cartList/cartList";
import { useEffect, useState } from "react";
export default function Page() {
  const [cartCount, setCount] = useState(0);
  const [cartList, setList] = useState([]);
  const [isChanged, setIsChanged] = useState(true);
  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("cart"));
    if (list) {
      setCount(list.length);
      setList(list);
    }
  }, [isChanged]);
  return (
    <div
      style={{
        maxWidth: "1220px",
        height: "100vh",
        width: "100%",
        padding: "10px",
        position: "relative",
      }}
    >
      <Nav cartCount={cartCount} />
      <CartList
        list={cartList}
        callback={() => {
          setIsChanged(!isChanged);
        }}
      />
    </div>
  );
}
