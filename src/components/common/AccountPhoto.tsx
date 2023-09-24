import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type AccountPhotoProps = {
  customClass: string;
}

const AccountPhoto = ({ customClass }: AccountPhotoProps) => {

  const userAccount = useSelector((state: RootState) => state.login.userAccount);

  let profileLetter: string = 'a';

  if (userAccount) {
    profileLetter = userAccount.username[0].toUpperCase();
  }

  return (
    <div className={customClass}>
      <div className={`${customClass}-letter`}>{profileLetter}</div>
    </div>
  )
}

export default AccountPhoto;