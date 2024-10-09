const ProductCardList = ({ product, image, callback }) => {
  const style = {
    parent: {
      width: "700px",
      height: "250px",
      padding: "12px",
      display: "flex",
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
      width: "180px",
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

      <div style={{ marginRight: "auto", height: "180px" }}>
        <p style={{ color: "#253D4E", fontWeight: "bold" }}>
          {product.productName}
        </p>
        <p>{product.productDescription}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginLeft: "auto",
          marginTop: "auto",
        }}
      >
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
        <div>
          <p>amount: ₹ {product.adQty * product.sellingPrice}</p>
          <p>HSN: {product.hsnCode}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginLeft: "auto",
            marginTop: "auto",
          }}
        >
          <ProductCardBtn image={image} callback={callback} product={product} />
          <IncreaseAndDecreaseButton product={product} callback={callback} />
        </div>
      </div>
    </div>
  );
};
const ProductCardBtn = ({ image, callback, product }) => {
  const removeProduct = async () => {
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      items = await [
        ...items.filter((item) => {
          if (item.productName !== product.productName) return item;
        }),
      ];
      localStorage.setItem("cart", JSON.stringify([...items]));
      console.log(JSON.parse(localStorage.getItem("cart")));

      callback();
    }
  };
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
      onClick={removeProduct}
    >
      <p
        style={{
          color: "white",
          fontSize: "18px",
        }}
      >
        Remove
      </p>
    </div>
  );
};

const IncreaseAndDecreaseButton = ({ product, callback }) => {
  const handleChangeAdd = async () => {
    if (product.adQty == undefined) product.adQty = 1;
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      items = await items.map((item) => {
        if (item.productName == product.productName) item.adQty += 1;
        return item;
      });
      localStorage.setItem("cart", JSON.stringify([...items]));
      console.log(JSON.parse(localStorage.getItem("cart")));

      callback();
    }
  };
  const handleChangeDecrease = async () => {
    if (product.adQty == undefined) product.adQty = 1;
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      items = await items.map((item) => {
        if (item.productName == product.productName && item.adQty > 1)
          item.adQty -= 1;
        return item;
      });
      localStorage.setItem("cart", JSON.stringify([...items]));
      console.log(JSON.parse(localStorage.getItem("cart")));

      callback();
    }
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
      paddingBottom: "2px",
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
        {product.adQty}
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

export default ProductCardList;
