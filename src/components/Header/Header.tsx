import Logo from './Logo';
import NavigationBar from './NavigationBar/NavigationBar';

const Header = () => {
  return (
    <div className='header-container'>
      <Logo />
      <NavigationBar />
    </div>
  );
};

export default Header;
