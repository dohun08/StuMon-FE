import * as S from './style';
import { useGetTodaySupervision } from '../../../hooks/useSupervision';
import StudyLamp from '../../../assets/icons/study-lamp.svg';
import leaveSeatChange from '../../../assets/icons/leave-seat-change.svg';
import Moon from '../../../assets/icons/moon.svg';


export default function TodaySupervision() {
  const { data, isLoading } = useGetTodaySupervision(new Date().toISOString().slice(0, 10));
  if (isLoading) {
    return <S.Wrapper>로딩 중...</S.Wrapper>;
  }
  const selfStudyTeacher = data?.self_study_teacher?.['8th_teacher'] ?? 'X';
  const leaveSeatTeacher = data?.leave_seat_teacher?.['8th_teacher'] ?? 'X';
  const nightTeacher = data?.night_teacher ?? 'X';
  return (
    <S.Wrapper>
      <h2>오늘의 감독</h2>
      <S.Info>
        <S.Supervision>
          <S.SupervisionTitle>
            <img src={StudyLamp} alt="Study Lamp" />
            <span>자습 감독</span>
          </S.SupervisionTitle>
          <S.SupervisionTeacher>{selfStudyTeacher}</S.SupervisionTeacher>
        </S.Supervision>
        <S.Supervision>
          <S.SupervisionTitle>
            <img src={leaveSeatChange} alt="Leave Seat Change" />
            <span>이석 감독</span>
          </S.SupervisionTitle>
          <S.SupervisionTeacher>{leaveSeatTeacher}</S.SupervisionTeacher>
        </S.Supervision>
        <S.Supervision>
          <S.SupervisionTitle>
            <img src={Moon} alt="Moon" />
            <span>야간 감독</span>
          </S.SupervisionTitle>
          <S.SupervisionTeacher>{nightTeacher}</S.SupervisionTeacher>
        </S.Supervision>
      </S.Info>
    </S.Wrapper>
  );
}