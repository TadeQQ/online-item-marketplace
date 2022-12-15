import { PageWithLayout } from '../types/PageLayout';
import { getBaseLayout } from '../components/Layout/BaseLayout';
import { List } from '../components/List/List';
const Home: PageWithLayout = () => {
  return (
    <div>
      <List />
    </div>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
