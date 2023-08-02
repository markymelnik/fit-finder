import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const LoadHomePage = ({ useIsMobile }) => {
  return (
    <div className='site-container'>
      <Header useIsMobile={useIsMobile} />
      <Main />
      <Footer />
    </div>
  )
}

export default LoadHomePage;