import styled from "styled-components";
import Link from "next/link";
const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;
const A = styled.a`
  margin-top: 22px;
  font-size: 13px;
  font-weight: bold;
`;
const Heart = styled.a`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Flag = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  :hover {
    background-color: #ebe8e8;
  }
`;

export const NavbarStyled = {
  Nav,
  A,
  Heart,
  Flag,
};
