import { PageWithLayout } from '../types/PageLayout';
import { getBaseLayout } from '../components/Layout/BaseLayout';
import { List } from '../components/List/List';
const Home: PageWithLayout = () => {
  return (
    <div>
      <p>
        Online Marketplace by Teddy to platforma z ogłoszeniami, na której
        możesz sprzedawać oraz wyszukiwać ogłoszenia z ofertami sprzedaży.
        Przeglądaj kategorię i oferty aby znaleźć coś dla siebie!
      </p>
      <List />
    </div>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
