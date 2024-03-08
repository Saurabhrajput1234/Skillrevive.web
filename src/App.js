import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./containers/skillRevive/WhatGPT3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blogs from "./containers/blogs/Blog";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "../src/pages/signup/Signup";
import TogglePage from "../src/pages/toggle/TogglePage";
import Login from "../src/pages/login/LoginPage";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/authenticated/Profile";
import Loading from "./pages/authenticated/Loading";









const App = () => {
  
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/toggle" element={<TogglePage />} />
        {/* Define your protected routes using the ProtectedRoute component */}
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login />} />
        

        <Route
          path="/"
          element={
            <div className="App">
              <div className="gradient__bg">
                <Navbar />
                <Header />
              </div>
              {/* <Brand /> */}
              <WhatGPT3 />
              <Features />
              <Possibility />
              <CTA />
              <Blogs />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
