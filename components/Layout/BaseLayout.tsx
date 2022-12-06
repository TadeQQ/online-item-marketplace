import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />
      <Search />
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
