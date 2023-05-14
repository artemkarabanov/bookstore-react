import { Container, Description, StyledFooter, Title } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <Description> Bookstore react</Description>
      <Container>
        <Title> Artem Karabanov </Title>
      </Container>
      <Description>All rights reserved</Description>
    </StyledFooter>
  );
};
