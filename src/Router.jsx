import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import InventarListe from "./pages/InventarListe";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<Home />} />
      <Route path={"/inv"} element={<InventarListe />} />
    </>
  )
);

export default Router;
