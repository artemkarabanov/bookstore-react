import { useEffect } from "react";
import { BooksList, Loader, Title } from "components";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { StyledHome } from "./style";

export const Home = () => {
  const { error, isLoading, books } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  console.log(books);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader size={"50px"} margin="250px" />}
      <StyledHome>
        <Title text="New Releases Books" />
        <BooksList isLoading={isLoading} error={error} books={books} />
      </StyledHome>
    </>
  );
};
