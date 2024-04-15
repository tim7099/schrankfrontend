import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import InventarListe from "./pages/InventarListe";
import Shopinglist from "./pages/Shopinglist";
import Checkout from "./pages/Checkout.jsx";
import Materialbestellung from "./pages/Materialbestellung.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<Home />} />
      <Route path={"/inv"} element={<InventarListe />} />
      <Route path={"/shopinglist"} element={<Shopinglist />} />
      <Route path={"/Checkout"} element={<Checkout />} />
      <Route path={"/Materialschein"} element={<Materialbestellung />} />
    </>
  )
);

export default Router;
