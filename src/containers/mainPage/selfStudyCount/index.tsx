import { useGetSelfStudyStats } from '../../../hooks/useSelfStudy';
import * as S from './style';


export default function SelfStudyCount() {
  const { data } = useGetSelfStudyStats();
  const selfStudyCount: number = data?.done_count || 0;
  const remainCount: number = data?.remaining_count || 0;
  console.log('Self Study Stats:', data);

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