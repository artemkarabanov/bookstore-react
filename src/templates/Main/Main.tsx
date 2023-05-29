import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components";
import { Header } from "../../components";
import { Content, StyledMain, Wrapper } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <Wrapper>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </StyledMain>
  );
};
