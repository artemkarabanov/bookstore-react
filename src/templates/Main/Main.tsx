import { Footer } from "../../components";
import { Header } from "../../components";
import { Content, StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Content></Content>
      <Footer />
    </StyledMain>
  );
};
