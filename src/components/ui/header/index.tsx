import { useLocation } from 'react-router-dom';
import * as S from './style';
import Logo from '../../../assets/logo.svg';

const MENU_ITEMS = [
  { label: '메인', path: '/' },
  { label: '이석', path: '/leaveSeat' },
  { label: '프로필', path: '/profile' },
  { label: '자습감독', path: '/supervision' },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <S.HeaderContainer>
      <S.Logo src={Logo} />
      <S.Divider />
      <S.Menu>
        {MENU_ITEMS.map(({ label, path }) => (
          <S.MenuItem key={path} active={pathname.includes(path)}>{label}</S.MenuItem>
        ))}
      </S.Menu>
    </S.HeaderContainer>
  );
}