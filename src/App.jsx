import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import List from './pages/list';
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import Group from "./pages/group";

function App() {

  return (
    <div>
        <Navbar />
        <BrowserRouter>
            <Routes>

              <Route path="/" element={
                <Home />
              } />

              <Route path="/list" element={
                <List />
              } />

              <Route path="/register" element={
                <Register />
              } />

              <Route path="/login" element={
                <Login />
              } />

              <Route path="/group" element={
                <Group />
              } />

            </Routes>
        </BrowserRouter>
        <Footer />
    </div>

  )

}

export default App;