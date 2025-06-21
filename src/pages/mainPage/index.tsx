import * as S from './style';
import SelfStudyCount from '../../containers/mainPage/selfStudyCount';
import LeaveSeat from '../../containers/mainPage/current-situation-non-search';
import TodaySupervision from '../../containers/mainPage/todaySupervision';
import NextSelfStudy from '../../containers/mainPage/nextSelfStudy';
import type {LeaveEntry} from "../leave-seat";


export default function MainPage() {
  const leaveData: LeaveEntry[] = [
    { id: 1, place: "베르실6", period: "7", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 2, place: "베르실2", period: "8~9", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 3, place: "마이크로프로세서실", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 4, place: "마이크로프로세서실", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 5, place: "마이크로프로세서실", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 6, place: "마이크로프로세서실", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 7, place: "마이크로프로세서실", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 8, place: "마이크로프로세서실", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"]},
    { id: 9, place: "베르실1", period: "10~11", students: ["2209 윤도훈", "2210 이정혁"] },
  ]
  return (
    <S.Wrapper>
      <SelfStudyCount />
      <S.Info>
        <LeaveSeat leaveData={leaveData} />
        <S.RightSection>
          <TodaySupervision />
          <NextSelfStudy />
        </S.RightSection>
      </S.Info>
    </S.Wrapper>
  );
}