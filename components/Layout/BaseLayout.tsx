import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import SelectCategory from "../SelectCategory/SelectCategory";
interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />
      <div>
        <SelectCategory /> <Search />
      </div>

      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
