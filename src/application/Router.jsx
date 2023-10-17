import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "../components/MainContainer/AppMainContainer.styled";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import MenuRules from "../pages/MenuRules/MenuRules";
import Ranking from "../pages/Ranking/Ranking";
import NimHistory from "../pages/NimHistory/NimHistory";
import ExternalLinks from "../pages/ExternalLinks/ExternalLinks";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamerules/" element={<MenuRules />} />
          <Route path="/ranking/" element={<Ranking />} />
          <Route path="/history/" element={<NimHistory />} />
          <Route path="/external-links/" element={<ExternalLinks />} />
          <Route path="/signup/" element={<Signup />} />
          <Route path="/login/" element={<Login />} />
          <Route path="*" element={<div>* * * Error 404 * * *</div>} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

export default Router;
