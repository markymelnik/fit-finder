import Header from './Header/Header';
import Search from './Search/Search';
import Footer from './Footer/Footer';

const LoadSearchPage = ({ useIsMobile }) => {
  return (
    <div className='site-container'>
      <Header useIsMobile={useIsMobile} />
      <Search useIsMobile={useIsMobile} />
      <Footer />
    </div>
  )
}

export default LoadSearchPage;