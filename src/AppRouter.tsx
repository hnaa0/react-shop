import { Route, Routes } from "react-router-dom";

import Home from "./viewPages/Home";
import Items from "./viewPages/Items";
import ItemInfo from "./viewPages/ItemInfo";
import Cart from "./viewPages/Cart";
import NotFound from "./viewPages/NotFound";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/accessory"
          element={<Items category="accessory" />}
        ></Route>
        <Route path="/digital" element={<Items category="digital" />}></Route>
        <Route path="/fashion" element={<Items category="fashion" />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:pid" element={<ItemInfo />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
