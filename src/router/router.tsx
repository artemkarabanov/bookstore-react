import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import { Main } from "templates";
import {
  Account,
  BookDetailsPage,
  Cart,
  Favorites,
  Home,
  NotFound,
  Registration,
  ResetPasswordPage,
  SearchPage,
  SigInPage,
} from "../pages";
import { ROUTE } from "./routes";
import { CartPage } from "pages/Cart/Cart";
import { BookDetails, RequareAuth, ResetPassword } from "components";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<Main />}>
      <Route index element={<Home />} />

      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.BOOK_DETAILS} element={<BookDetailsPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.ACCOUNT} element={<Account />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.FAVORITES} element={<Favorites />} />
      </Route>

      <Route path={ROUTE.REGISTRATION} element={<Registration />} />
      <Route path={ROUTE.SIGNIN} element={<SigInPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />} />

      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Route>,
  ),
);
