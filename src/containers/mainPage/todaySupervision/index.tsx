import * as S from './style';
import { useGetSupervision } from '../../../hooks/useSupervision';
import StudyLamp from '../../../assets/icons/study-lamp.svg';
import leaveSeatChange from '../../../assets/icons/leave-seat-change.svg';
import Moon from '../../../assets/icons/moon.svg';

interface TeacherInfo {
  "8th_teacher": string;
}

interface SupervisionRecord {
  date: string;
  self_study_teacher: TeacherInfo;
  leave_seat_teacher: TeacherInfo;
  night_teacher: string;
}

export default function TodaySupervision() {
  const today = new Date();
  const YYYY = today.getFullYear();
  const MM = String(today.getMonth() + 1).padStart(2, '0');
  const DD = String(today.getDate()).padStart(2, '0');
  const todayStr = `${YYYY}-${MM}-${DD}`;

  const month = today.getMonth() + 1;
  const { data, isLoading } = useGetSupervision(month);

  if (isLoading) {
    return <S.Wrapper>로딩 중...</S.Wrapper>;
  }

  const list = Array.isArray(data) ? data : data?.data ?? [];

  const todayInfo: SupervisionRecord | undefined = list.find((item: SupervisionRecord) => item.date === todayStr);

  const selfStudyTeacher = todayInfo?.self_study_teacher?.['8th_teacher'].split('/')[0] ?? 'X';
  const leaveSeatTeacher = todayInfo?.leave_seat_teacher?.['8th_teacher'].split('/')[0] ?? 'X';
  const nightTeacher = todayInfo?.night_teacher?.split('/')[0] ?? 'X';

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