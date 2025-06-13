import * as S from './style';
import { LeaveSeat, SelfStudyCount, TodaySupervision, NextSelfStudy } from '../../containers/homeExport';

export default function MainPage() {
  return (
    <S.Wrapper>
      <SelfStudyCount />
      <S.Info>
        <LeaveSeat />
        <S.RightSection>
          <TodaySupervision />
          <NextSelfStudy />
        </S.RightSection>
      </S.Info>
    </S.Wrapper>
  );
}