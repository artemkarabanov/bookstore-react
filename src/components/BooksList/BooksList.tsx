import { INewBooksApi } from "types";
import { BookItem } from "../BookItem";
import { StyledBooksList } from "./style";

interface IProps {
  isLoading: boolean;
  error: string | null;
  books: INewBooksApi[];
}

export const BooksList = ({ isLoading, error, books }: IProps) => {
  return (
    <>
      <StyledBooksList>
        {books.map((book, index) => {
          return <BookItem book={book} key={book.isbn13} index={index} />;
        })}
      </StyledBooksList>
    </>
  );
};
