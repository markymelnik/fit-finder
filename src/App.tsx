import './styles/styles.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='site-container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
};

export default App;
