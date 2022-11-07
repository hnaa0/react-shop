import { Route, Routes } from "react-router-dom";

import Home from "./viewPages/Home";
import Items from "./viewPages/Items";
import NotFound from "./viewPages/NotFound";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accessory" element={<Items />}></Route>
        <Route path="/digital" element={<Items />}></Route>
        <Route path="/fashion" element={<Items />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
