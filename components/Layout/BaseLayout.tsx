import React from "react";
import Navbar from "../Navbar/Navbar";

interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />

      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
