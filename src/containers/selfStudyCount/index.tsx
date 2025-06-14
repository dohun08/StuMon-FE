import * as S from './style';

export default function SelfStudyCount() {
  const selfStudyCount: number = 9;
  const remainCount: number = 1;
  return (
    <S.Wrapper>
      <S.Title>{((selfStudyCount - remainCount) / selfStudyCount * 100).toFixed(2)}%</S.Title>
      <S.ProgressBar>
        <S.ProgressBarFill width={((selfStudyCount - remainCount) / selfStudyCount) * 100} />
      </S.ProgressBar>
      <S.CountSection>
        <S.Count>자습 횟수 : {selfStudyCount}</S.Count>
        <S.RemainCount>남은 자습 횟수 : {remainCount}</S.RemainCount>
      </S.CountSection>
    </S.Wrapper>
  );
}