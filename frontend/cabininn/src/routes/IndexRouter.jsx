import React from "react";
import Footer from "../components/footer/Footer";
import NavBarAll from "../components/navbar/NavBarAll";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Results from "../pages/results/Results";
import NotFound from "../pages/notfound/NotFound";

const IndexRouter = () => {
  return (
    <div>
      <NavBarAll />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/results" element={ <Results/> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default IndexRouter;
