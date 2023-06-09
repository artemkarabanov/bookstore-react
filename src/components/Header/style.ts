import styled from "styled-components";
import { Space, Color } from "ui";

export const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${Color.Gray};

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;
