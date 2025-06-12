import * as S from './style';
import Logo from '../../../assets/logo.svg';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo src={Logo} />
      <S.Divider />
      <S.Menu>
        <S.MenuItem>메인</S.MenuItem>
        <S.MenuItem>이석</S.MenuItem>
        <S.MenuItem>프로필</S.MenuItem>
        <S.MenuItem>자습감독</S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  );
}