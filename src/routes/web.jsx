import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
} from "react-router-dom";
import App from "../App";
import { AuthLayout } from "../components/auth-layout/AuthLayout";
import Auth from "../middleware/Auth";
import { Dashboard } from "../pages/dashboard/DashboardPage";
import { Caraousel } from "../pages/dashboard/CaraouselPage";
import LoginPage from "../pages/login/LoginPage";
import { Layanan } from "../pages/dashboard/LayananPage";
import { Protofolio } from "../pages/dashboard/ProtofolioPage";
import { About } from "../pages/dashboard/AboutPage";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    })
  );

const WebRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Auth />}>
        <Route path="" element={<Dashboard />} />
        <Route path="caraousel" element={<Caraousel />} />
        <Route path='layanan' element={<Layanan />} />
        <Route path='protofolio' element={<Protofolio />} />
        <Route path='about' element={<About />}/>
      </Route>
    </Route>
  )
);

export default WebRoutes;
