import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Cart from "../pages/cart/Cart";

import Detail from "../pages/detail/Detail";
import CheckOut from "../pages/checkOut/CheckOut";
import Favorite from "../pages/favorite/Favorite";
import Contact from "../pages/contact/Contact";
import About from "../pages/About";
import NotFoundPage from "../pages/not-found-page/NotFounPage";
import FormExample from "../pages/signUp/FormExample";
import LoginExample from "../pages/signUp/LoginExample";

import SignUp from "../pages/signUp/SignUp";
import MyAccount from "../pages/MyAccount/MyAccount";
import Profile from "../components/profile1/Profile";

const menu = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/form",
    name: "Form",
    component: FormExample,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginExample,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/checkOut",
    name: "CheckOut",
    component: CheckOut,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile  ,
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: MyAccount,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {menu.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
