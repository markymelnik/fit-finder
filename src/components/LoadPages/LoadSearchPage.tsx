import Header from '../Header/Header';
import Search from '../SearchPage/SearchPage';
import Footer from '../Footer/Footer';

const LoadSearchPage = () => {
  return (
    <div className='search-container'>
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default LoadSearchPage;
