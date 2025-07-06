import * as S from './style';
import { useState, useEffect } from 'react';
import useDay from '../../store/day'
import { useGetLeaveSeat } from '../../hooks/useLeaveSeat';
import SelfStudyCount from '../../containers/mainPage/selfStudyCount';
import LeaveSeat from '../../containers/mainPage/current-situation-non-search';
import TodaySupervision from '../../containers/mainPage/todaySupervision';
import NextSelfStudy from '../../containers/mainPage/nextSelfStudy';
import type { LeaveEntry } from "../leave-seat";


export default function MainPage() {
  const { today } = useDay();

  const { data, isLoading } = useGetLeaveSeat(today.slice(0, 10));
  const [leaveSeat, setLeaveSeat] = useState<LeaveEntry[]>([]);

  useEffect(() => {
    if (data) {
      const newData = data.map((item: LeaveEntry, idx: number) => {
        if (item.period === "SEVEN") item.period = "7";
        else if (item.period === "EIGHT_NIGHT") item.period = "8~9";
        else if (item.period === "TEN_ELEVEN") item.period = "10~11";
        return {
          ...item,
          id: idx
        }
      })
      setLeaveSeat(newData);
    }
  }, [isLoading]);
  return (
    <S.Wrapper>
      <SelfStudyCount />
      <S.Info>
        <LeaveSeat leaveData={leaveSeat} isLoading={isLoading} />
        <S.RightSection>
          <TodaySupervision />
          <NextSelfStudy />
        </S.RightSection>
      </S.Info>
    </S.Wrapper>
  );
}