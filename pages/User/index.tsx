import React from 'react';
import { getBaseLayout } from '../../components/Layout/BaseLayout';
import { PageWithLayout } from '../../types/PageLayout';

const UserPage: PageWithLayout = () => {
  return <div>my profile name email</div>;
};

UserPage.getLayout = getBaseLayout;
export default UserPage;
