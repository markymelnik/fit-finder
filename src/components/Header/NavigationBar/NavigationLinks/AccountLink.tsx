import { Link } from 'react-router-dom';
import { setIsMobileMenuOpen } from '../../../../redux/slices/mobileMenuSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';

const AccountLink = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLinkClick = () => {
    dispatch(setIsMobileMenuOpen(false));
  }

  return (
    <Link className='account-link' to='/account' onClick={handleLinkClick}>Account</Link>
  );
};

export default AccountLink;