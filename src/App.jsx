import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/HEADER/Header";
import FOOTER from "./components/footer/footer";
import Landing from "./components/PAGES/Landing";
import Catalog__Container from "./components/PAGES/CATALOG/Catalog__Container";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemPage from "./components/PAGES/ItemPage";
import { getCategories } from "./services/utils";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog/" element={<Catalog__Container />} />
          <Route
            path="/catalog/category/:category"
            element={<Catalog__Container />}
          />
          <Route
            path="/catalog/brand/:brand"
            element={<Catalog__Container />}
          />
          <Route
            path="/catalog/keyword/:keyword"
            element={<Catalog__Container />}
          />{" "}
          <Route
            path="/catalog/search/:search"
            element={<Catalog__Container />}
          />
          <Route path="/item/:itemID" element={<ItemPage />} />
          <Route path="*" element={<h3>seccion en construccion</h3>} />
        </Routes>

        <FOOTER />
      </BrowserRouter>
    </>
  );
}

export default App;
