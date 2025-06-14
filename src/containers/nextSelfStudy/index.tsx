import * as S from './style';
import Time from '../../assets/time.svg';
import RightArrow from '../../assets/icons/right-arrow.svg';

export default function NextSelfStudy() {
  return (
    <S.Wrapper>
      <S.LeftSection>
        <S.LeftSectionTitle>
          <h2>다음 자습 시간</h2>
          <S.RemainDay>D - {24}</S.RemainDay>
        </S.LeftSectionTitle>
        <S.CheckButton>자습확인 <img src={RightArrow} alt="arrow" /></S.CheckButton>
      </S.LeftSection>
      <S.RightSection>
        <img src={Time} alt="time" />
      </S.RightSection>
    </S.Wrapper>
  );
}