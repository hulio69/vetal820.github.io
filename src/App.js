import React from "react";

import { MultiLangProvider } from "./context/MultiLang/MultiLang";

import Header from "./containers/Header/Header";
import Hero from "./containers/Hero/Hero";
import Team from "./containers/Team/Team";
import Why from "./containers/Why/Why";
import Round from "./containers/Round/Round";
import Statistic from "./containers/Statistic/Statistic";
import Footer from "./containers/Footer/Footer";
import Ipo from "./containers/Ipo/Ipo";
import Market from "./containers/Market/Market";
import Advantages from "./containers/Advantages/Advantages";
import GlobalPreloader from "./components/GlobalPreloader.js/GlobalPreloader";


const App = () => {
  return (
    <MultiLangProvider>
      <GlobalPreloader />
      <Header />
      <Hero />
      <Ipo />
      <Market />
      <Advantages />
      <Why />
      <Round />
      <Statistic />
      <Team />
      <Footer />
    </MultiLangProvider>
  );
}

export default App;