import Link from "next/link";
import React from "react";
import logo from "../../images/logo.png";
import { Logo } from "./logo/Logo";
import { NavbarStyled } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyled.Nav>
      <Logo alt="Item Marketplace" src={logo} height={90} width={350} />
      <Link href="/Search">Search</Link>
      <Link href="/Login">Login</Link>
    </NavbarStyled.Nav>
  );
};

export default Navbar;
