import * as S from './style';
import StudyLamp from '../../assets/icons/study-lamp.svg';
import leaveSeatChange from '../../assets/icons/leave-seat-change.svg';
import Moon from '../../assets/icons/moon.svg';


export default function TodaySupervision() {
  return (
    <S.Wrapper>
      <h2>오늘의 감독</h2>
      <S.Info>
        <S.Supervision>
          <S.SupervisionTitle>
            <img src={StudyLamp} alt="Study Lamp" />
            <span>자습 감독</span>
          </S.SupervisionTitle>
          <S.SupervisionTeacher>{"이혜정"}</S.SupervisionTeacher>
        </S.Supervision>
        <S.Supervision>
          <S.SupervisionTitle>
            <img src={leaveSeatChange} alt="Leave Seat Change" />
            <span>이석 감독</span>
          </S.SupervisionTitle>
          <S.SupervisionTeacher>{"최병준"}</S.SupervisionTeacher>
        </S.Supervision>
        <S.Supervision>
          <S.SupervisionTitle>
            <img src={Moon} alt="Moon" />
            <span>야간 감독</span>
          </S.SupervisionTitle>
          <S.SupervisionTeacher>{"진예빈"}</S.SupervisionTeacher>
        </S.Supervision>
      </S.Info>
    </S.Wrapper>
  );
}