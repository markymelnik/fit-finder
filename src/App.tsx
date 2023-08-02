import './styles/styles.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import useIsMobile from './hooks/useIsMobile';

const App = () => {
  const isMobile = useIsMobile();

  return (
    <div className='site-container'>
      <Header useIsMobile={isMobile} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
