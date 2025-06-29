import * as S from './style';
import Time from '../../../assets/time.svg';
import RightArrow from '../../../assets/icons/right-arrow.svg';
import { useGetNextSelfStudy } from '../../../hooks/useSelfStudy';

export default function NextSelfStudy() {
  const { data } = useGetNextSelfStudy();
  console.log('Next self-study data:', data);
  return (
    <S.Wrapper>
      <S.LeftSection>
        <S.LeftSectionTitle>
          <h2>다음 자습 시간</h2>
          <S.RemainDay>D - {data?.days_left}</S.RemainDay>
        </S.LeftSectionTitle>
        <S.CheckButton>자습확인 <img src={RightArrow} alt="arrow" /></S.CheckButton>
      </S.LeftSection>
      <S.RightSection>
        <img src={Time} alt="time" />
      </S.RightSection>
    </S.Wrapper>
  );
}