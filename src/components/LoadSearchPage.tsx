import Header from './Header/Header';
import Search from './Search/Search';
import Footer from './Footer/Footer';

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
