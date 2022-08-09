import React from "react";

import Footer from "./components/footer";
import NavBar from "./components/navbar";
import List from './pages/list';
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import Account from "./pages/account";
import NotFound from "./pages/notFound";
import NewRegister from "./pages/newRegister";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import roles from "./helpers/roles";

import AdminUsers from "./pages/adminUsers";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
        <NavBar />
            <Routes>

              <Route path="/" element={
              <PublicRoute>
                <Home />
              </PublicRoute>} />

              <Route path="/list" element={
              <PrivateRoute>
                <List />
              </PrivateRoute>} />

              <Route path="/add" element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>} />

              <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>} />

              <Route path="/register" element={
              <PublicRoute>
                <NewRegister />
              </PublicRoute>} />

              <Route path="/account" element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>} />

              <Route path="/admin/users" element={
              <PrivateRoute hasRoles={roles.admin}>
                <AdminUsers />
              </PrivateRoute>} />

              <Route path="*" element={<NotFound />} />

            </Routes>
        <Footer />
    </div>

  )

}

export default App;