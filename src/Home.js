import React from "react";
import { Products } from "./Products";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function HomeScreen() {
  return (
    <div>
      <div className="App">
        <Header />
        <Products />
        <Footer />
      </div>
    </div>
  );
}
