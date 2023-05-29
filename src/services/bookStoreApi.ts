import axios from "axios";
import { IBookDetails, INewBooksApi, SearchedBooksResponse } from "types";

const BASE_URL = "https://api.itbook.store/1.0";

export async function getNew() {
  const { data } = await axios.get<INewBooksApi>(`${BASE_URL}/new`);
  return data.books;
}

export async function getDetails(isbn: string) {
  const { data } = await axios.get<IBookDetails>(`${BASE_URL}/books/${isbn}`);
  return data;
}

export async function getSearch(query: string | null, page: number | null = 1) {
  const { data } = await axios.get<SearchedBooksResponse>(`${BASE_URL}/search/${query}/${page}`);
  return data;
}
