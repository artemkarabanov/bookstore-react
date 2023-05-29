import { Link } from "react-router-dom";
import { useState } from "react";
import { BurgerNavigate } from "../BurgerNavigate";
import { BookstoreIcon, CartHeaderIcon, HeartHeaderIcon, UserHeaderIcon } from "assets";
import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { StyledBurger } from "./style";
import { getCart, getFavorites, useAppSelector } from "store";
import { Search } from "../Search";
import { CartLogo, Count, HeartLogo, Logo, Navbar, StyledBurgerNavbar, UserLogo } from "./style";
import { TogglerTheme } from "../TogglerTheme";
export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {width < 801 && (
        <>
          <StyledBurger open={isOpen} onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
          <BurgerNavigate open={isOpen} close={handleClose} />
        </>
      )}
    </>
  );
};

export const BurgerMenu = () => {
  const { item } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);

  const { width = 0 } = useWindowSize();

  return (
    <StyledBurgerNavbar>
      <Link to={ROUTE.HOME}>
        <Logo>
          <BookstoreIcon />
        </Logo>
      </Link>
      {width > 800 && (
        <>
          <Search />
          <TogglerTheme />
          <Navbar>
            <Link to={ROUTE.FAVORITES}>
              <HeartLogo item={item}>
                <HeartHeaderIcon />
              </HeartLogo>
            </Link>
            <Link to={ROUTE.CART}>
              <CartLogo cart={cart}>
                {cart.length > 0 && <Count>{cart.length}</Count>}
                <CartHeaderIcon />
              </CartLogo>
            </Link>
            <Link to={ROUTE.ACCOUNT}>
              <UserLogo>
                <UserHeaderIcon />
              </UserLogo>
            </Link>
          </Navbar>
        </>
      )}
      <Burger />
    </StyledBurgerNavbar>
  );
};
