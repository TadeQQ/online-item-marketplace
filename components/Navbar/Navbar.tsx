import Link from "next/link";
import React from "react";
import logo from "../../images/logo.png";
import { Logo } from "./logo/Logo";
import { NavbarStyled } from "./Navbar.styled";
import Search from "../Search/Search";
import { AiOutlineHeart } from "react-icons/ai";
import { GiUsaFlag } from "react-icons/gi";

const Navbar = () => {
  return (
    <NavbarStyled.Nav>
      <Logo alt="Item Marketplace" src={logo} height={65} width={250} />
      <Search />
      <Link legacyBehavior href="/Login">
        <NavbarStyled.A>Sign in</NavbarStyled.A>
      </Link>
      <NavbarStyled.Flag>
        <GiUsaFlag />
      </NavbarStyled.Flag>
      <Link legacyBehavior href="/Favorites">
        <NavbarStyled.Heart>
          <AiOutlineHeart />
        </NavbarStyled.Heart>
      </Link>
      Cart
    </NavbarStyled.Nav>
  );
};

export default Navbar;
