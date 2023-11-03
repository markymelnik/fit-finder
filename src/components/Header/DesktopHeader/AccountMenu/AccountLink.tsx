import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setIsAccountMenuOpen } from '../../../../redux/slices/accountMenuSlice';
import { setIsSidebarMenuOpen } from '../../../../redux/slices/sidebarMenuSlice';
import { AppDispatch } from '../../../../redux/store';

type AccountLinkProps = {
  customClass: string;
}

const AccountLink = ({ customClass }: AccountLinkProps) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLinkClick = () => {
    dispatch(setIsSidebarMenuOpen(false));
    dispatch(setIsAccountMenuOpen(false));
  }

  return (
    <Link className={customClass} to='/account' onClick={handleLinkClick}>Account</Link>
  );
};

export default AccountLink;