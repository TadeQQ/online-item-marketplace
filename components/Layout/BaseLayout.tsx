import React from 'react';
import { Root } from './Baselayout.styled';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import SelectCategory from '../SelectCategory/SelectCategory';
import Footer from '../Footer/Footer';
interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
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
      </Root>
      <Footer />
    </>
  );
};

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
