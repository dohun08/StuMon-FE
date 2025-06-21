import styled from "@emotion/styled";
import CurrentSituation from "../../containers/leave-seat/current-situation";
import CurrentPlaceStatus from "../../containers/leave-seat/current-place-status";
import {useGetLeaveSeat} from "../../hooks/useLeaveSeat.ts";
import useDay from "../../store/day.ts";
import {useEffect, useState} from "react";
import type {Student} from "./form/student";
import Loading from "../../components/ui/loading";
export interface LeaveEntry {
  place: string;
  period: string
  students: string[];
  id?:number
};
export interface LeaveForm {
  place_name: string;
  period: string;
  students: Student[];
  cause: string;
  date: string;
}
export default function LeaveSeat() {
  // const leaveData: LeaveEntry[] = [
  //   {id:1, place : "베르실6", period : "7", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:2, place : "베르실2", period : "8~9", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:3, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:4, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:5, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:6, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:7, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:8, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  //   {id:9, place : "베르실1", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"]},
  // ]
  const {today} = useDay();

  const {data, isLoading} = useGetLeaveSeat(today.slice(0, 10));
  const [leaveSeat, setLeaveSeat] = useState<LeaveEntry[]>([]);

  useEffect(() => {
    if (data) {
      const newData = data.map((item : LeaveEntry, idx: number) => {
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
      <LeaveSeatContainer>
        {isLoading && <Loading />}
       <LeaveSeatWrapper>
        <CurrentSituation leaveData={leaveSeat} />
        <CurrentPlaceStatus leaveData={leaveSeat} />
       </LeaveSeatWrapper>
      </LeaveSeatContainer>
  )
}

const LeaveSeatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #F7F7F9;
  padding: 1.5rem 3rem;
`;

const LeaveSeatWrapper = styled.div`
 display: grid;
 width: 100%;
    height: 100%;
 grid-template-columns: 3fr 1fr;
 gap: 1.5rem;
`