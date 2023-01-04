import Link from 'next/link';
import React from 'react';
import logo from '../../images/logo.png';
import { Logo } from './logo/Logo';
import { NavbarStyled } from './Navbar.styled';
import Search from '../Search/Search';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiUsaFlag } from 'react-icons/gi';
import { BsCart4 } from 'react-icons/bs';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { isAuthenticated, displayName, signOut } = useAuth();
  return (
    <NavbarStyled.Nav>
      <Link legacyBehavior href={'/'}>
        <NavbarStyled.Logo>
          <Logo alt="Item Marketplace" src={logo} height={65} width={250} />
        </NavbarStyled.Logo>
      </Link>
      <Search />
      {isAuthenticated ? (
        <div>
          <Link legacyBehavior href="/User">
            <NavbarStyled.A>My Profile</NavbarStyled.A>
          </Link>{' '}
          <button onClick={() => signOut}>SignOut</button>
        </div>
      ) : (
        <Link legacyBehavior href="/SignUp">
          <NavbarStyled.A>Sign up</NavbarStyled.A>
        </Link>
      )}
      <NavbarStyled.Flag>
        <GiUsaFlag />
      </NavbarStyled.Flag>
      <Link legacyBehavior href="/Favorites">
        <NavbarStyled.Heart>
          <AiOutlineHeart />
        </NavbarStyled.Heart>
      </Link>
    </NavbarStyled.Nav>
  );
};

export default Navbar;
