import React, { useContext } from "react";
import Navbar from "./components/Header/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home/Home";
import AdminPanel from "./components/AdminPanel/OdmenPanel";
import Auth from "./components/Auth/Auth";
import Favourites from "./components/Favourites/Favourites";
import { authContext } from "./context/AuthContext";
import AddClasses from "./components/AdminPanel/AddClasses/AddClasses";
import TopBar from "./components/Header/TopBar";
import EditClasses from "./components/AdminPanel/EditClasses/EditClasses";
import Classes from "./components/Classes/Classes";
import Contacts from "./components/Contacts/Contacts";
import ClassDetails from "./components/Classes/ClassDetails";
import Footer from "./components/Footer/Footer";

const MainRoutes = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Router>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/odmen" element={<AdminPanel />} />
          <Route path="odmen/add" element={<AddClasses />} />
          <Route path="edit/:id" element={<EditClasses />} />
          <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
          <Route path="/classes/:params" element={<Classes />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:id" element={<ClassDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default MainRoutes;
