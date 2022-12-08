import React from "react";
import { Root } from "./Baselayout.styled";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import SelectCategory from "../SelectCategory/SelectCategory";
interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Root>
      <Navbar />
      <div>
        {
          /* <SelectCategory /> */
          // Only if window's width is small
        }
        <div>Category names</div>
      </div>

      <div>{children}</div>
      <footer>Footer</footer>
    </Root>
  );
};

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
