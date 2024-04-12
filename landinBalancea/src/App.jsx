// import { createContext } from "react";
// import { ThemeProvider } from "styled-components";
// import { BrowserRouter } from "react-router-dom";
// import { MyRoutes } from "./routes/routes";
// import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/atomos/header';
import Footer from './components/atomos/footer';

const App = () => {

  return (
    <div>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

