import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import BannersSlider from "./components/bannersSlider";
import TestSlider from "./components/testSlider";
import Dividor from "./components/dividor";
import DocumentationSection from "./components/documentationSection";
import Footer from "./components/footer";
import ApiDocument from "./components/apiDocument";
import Providers from "./components/providers";
import HomePage from "./components/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dividor />
      <div>
        <Switch>
          <Route path="/api-document" component={ApiDocument} />
          <Route path="/providers" component={Providers} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
