import RangeSlider from './slider'
const SideNav = ({image, showColumn, setShowColumn,highPrice,setIsChanged }) => {
    const handleChange = () => {
      setShowColumn(!showColumn);
    };
    const style = {
      width: "40px",
      height: "40px",
      cursor: "pointer",
    };
    return (
      <div
        style={{
          display: "flex",
        
          flexDirection: "column",
          gap:"20px",
          padding: "10px",
          width: "250px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "auto",
              color: "#253D4E",
              cursor: "pointer",
              textDecoration: "none",
              marginBottom: "10px",
            }}
          >
            View
          </h1>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {!showColumn ? (
              <img
                src={image.column}
                alt=""
                style={style}
                onClick={handleChange}
              />
            ) : (
              <img
                src={image.column2}
                alt=""
                style={style}
                onClick={handleChange}
              />
            )}
  
            {showColumn ? (
              <img src={image.row} alt="" style={style} onClick={handleChange} />
            ) : (
              <img src={image.row2} alt="" style={style} onClick={handleChange} />
            )}
          </div>
        </div>
        <div>
          <h2>Filter by Price</h2>
  
          <RangeSlider  highPrice={highPrice} setIsChanged={setIsChanged} />
        </div>
      </div>
    );
  };
  export default SideNav 

