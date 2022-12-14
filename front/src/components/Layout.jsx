import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="container content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
