import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import { Main } from "templates";
import {
  Account,
  Cart,
  Favorites,
  Home,
  NotFound,
  Registration,
  ResetPassword,
  Search,
} from "../pages";
import { ROUTE } from "./routes";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<Main />}>
      <Route index element={<Home />} />
      <Route path={ROUTE.SEARCH} element={<Search />} />
      <Route path={ROUTE.ACCOUNT} element={<Account />} />
      <Route path={ROUTE.CART} element={<Cart />} />
      <Route path={ROUTE.FAVORITES} element={<Favorites />} />
      <Route path={ROUTE.REGISTRATION} element={<Registration />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Route>,
  ),
);
