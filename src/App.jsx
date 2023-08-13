import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";
import NavBar from "./Components/NavBar";
import ProductPage from "./Components/ProductPage";
import { useState } from "react";
import ProductImages from "./Components/ProductImages";
import Sidebar from "./Components/Sidebar";
function App() {
  const [cartContent, setCartContent] = useState(0);
  const [imageZoomToggle, setImageZoomToggle] = useState(false);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setImageZoomToggle(false);
    }
  };
  return (
    <div className="App position-relative">
      {imageZoomToggle ? (
        <div
          onClick={handleBackgroundClick}
          className="showImages position-absolute"
        >
          <ProductImages />
        </div>
      ) : (
        ""
      )}
      {/* <Sidebar /> */}
      <NavBar cartContent={cartContent} setCartContent={setCartContent} />
      <ProductPage
        setImageZoomToggle={setImageZoomToggle}
        setCartContent={setCartContent}
      />
    </div>
  );
}

export default App;
