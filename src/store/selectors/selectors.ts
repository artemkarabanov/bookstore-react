import { RootState } from "../store";

export const getBookDetails = (state: RootState) => state.bookDetails;

export const getCart = (state: RootState) => state.cart;

export const getFavorites = (state: RootState) => state.favorites;

export const getUserInfo = (state: RootState) => state.userInfo;

export const getNewBooks = (state: RootState) => state.newBooks;

export const getSearch = (state: RootState) => state.search;