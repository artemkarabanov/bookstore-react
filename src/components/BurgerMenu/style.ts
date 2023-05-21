import styled from "styled-components";
import { IBookDetails } from "types";
import { Color, Space } from "ui";

interface IProps {
  open?: boolean;
}

export const StyledBurger = styled.div<IProps>`
  @media (max-width: 800px) {
    position: fixed;
    top: 28px;
    right: 60px;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    background: transparent;
    width: ${Space.Medium};
    height: ${Space.Medium};
    margin-left: ${Space.Medium};
  }

  div {
    display: flex;
    width: 33px;
    height: 2px;
    background: ${({ open }) => (open ? `${Color.PrimaryDark}` : `${Color.PrimaryDark}`)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface ICart {
  cart: IBookDetails[];
}
interface Ifavorites {
  item: IBookDetails[];
}

export const StyledBurgerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.div`
  margin-top: 5px;
  color: ${Color.PrimaryDark};
  cursor: pointer;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
`;
export const HeartLogo = styled.div<Ifavorites>`
  cursor: pointer;

  stroke: ${({ item }) => (item.length > 0 ? "red" : `${Color.PrimaryDark}`)};

  :hover {
    stroke: MediumPurple;
    transition: all 0.5s;
  }
`;
export const CartLogo = styled.div<ICart>`
  width: 24px;
  height: 24px;
  stroke: ${({ cart }) => (cart.length > 0 ? "red" : `${Color.PrimaryDark}`)};
  cursor: pointer;

  :hover {
    stroke: MediumPurple;
    transition: all 0.5s;
  }
`;
export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  stroke: ${Color.PrimaryDark};
  cursor: pointer;

  :hover {
    stroke: MediumPurple;
    transition: all 0.5s;
  }
`;

export const Count = styled.div`
  position: absolute;
  top: 24px;
  background-color: MediumPurple;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
`;
