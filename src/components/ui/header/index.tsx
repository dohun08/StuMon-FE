import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import Logo from '../../../assets/logo.svg';
import House from '../../../assets/icons/house.svg';
import Exchange from '../../../assets/icons/exchange.svg';
import Profile from '../../../assets/icons/profile.svg';
import Supervision from '../../../assets/icons/calender.svg';

const MENU_ITEMS = [
  { label: '메인', path: '/', icon: House },
  { label: '이석', path: '/leaveSeat', icon: Exchange },
  { label: '프로필', path: '/profile', icon: Profile },
  { label: '자습감독', path: '/supervision', icon: Supervision },
];

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <S.HeaderContainer>
      <S.Logo src={Logo} />
      <S.Divider />
      <S.Menu>
        {MENU_ITEMS.map(({ label, path, icon }) => (
          <S.MenuItem key={path} active={pathname.includes(path)} onClick={() => handleMenuClick(path)}>
            <img src={icon} />
            <div>{label}</div>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.HeaderContainer>
  );
}