import RootLayout from "../../components/layout/RootLayout";
import styled from "@emotion/styled";
import CurrentSituation from "../../containers/leave-seat/current-situation";
import CurrentPlaceStatus from "../../containers/leave-seat/current-place-status";
export interface LeaveEntry {
  id: number;
  place: string;
  period: "7" | "8~9" | "10~11";
  student: string[];
  teacher: string;
};
export default function LeaveSeat() {
  const leaveData: LeaveEntry[] = [
    {id:1, place : "베르실6", period : "7", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:2, place : "베르실2", period : "8~9", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:3, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:4, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:5, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:6, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:7, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:8, place : "마이크로프로세서실", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
    {id:9, place : "베르실1", period : "10~11", student : ["2209 윤도훈", "2210 이정혁"], teacher : "차수민"},
  ]
  return (
    <RootLayout>
      <LeaveSeatContainer>
       <LeaveSeatWrapper>
        <CurrentSituation leaveData={leaveData} />
        <CurrentPlaceStatus leaveData={leaveData} />
       </LeaveSeatWrapper>
      </LeaveSeatContainer>
    </RootLayout>
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