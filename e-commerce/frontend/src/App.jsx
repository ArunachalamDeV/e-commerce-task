import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

import Login from "./page/signIn/page";
import ProductPage from "./page/productPage/page";
import Cart from "./page/cart/page";
import SignIn from "./page/signIn/page";
import SignUp from "./page/signUp/page";
import NotFound from "./page/notFund/page";
import ProductSummary from "./page/productSummary/page";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductSummary" element={<ProductSummary />} />
           {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
