import Link from "next/link";
import React from "react";
import logo from "../../images/logo.png";
import { Logo } from "./logo/Logo";
import { NavbarStyled } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyled.Nav>
      <Logo alt="Item Marketplace" src={logo} height={90} width={350} />
      <Link href="/">dupa</Link>
    </NavbarStyled.Nav>
  );
};

export default Navbar;
