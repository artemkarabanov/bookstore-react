import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components";
import { Header } from "../../components";
import { Content, StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledMain>
  );
};
