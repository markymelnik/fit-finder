import { Link } from 'react-router-dom';
import { setIsMobileMenuOpen } from '../../../../redux/slices/mobileMenuSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { setIsDesktopProfileDropdownOpen } from '../../../../redux/slices/desktopProfileDropdownSlice';

type AccountLinkProps = {
  customClass: string;
}

const AccountLink = ({ customClass }: AccountLinkProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLinkClick = () => {
    dispatch(setIsMobileMenuOpen(false));
    dispatch(setIsDesktopProfileDropdownOpen(false));
  }

  return (
    <Link className={customClass} to='/account' onClick={handleLinkClick}>Account</Link>
  );
};

export default AccountLink;