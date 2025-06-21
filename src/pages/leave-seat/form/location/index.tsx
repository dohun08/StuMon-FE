import styled from "@emotion/styled";
import Map from "../../../../containers/leave-seat-form/location/map";
import {useGetLeaveSeat} from "../../../../hooks/useLeaveSeat.ts";
import useDay from "../../../../store/day.ts";
import {useEffect, useState} from "react";
import type {LeaveEntry} from "../../index.tsx";

export function LeaveSeatFormLocation() {
  const {today} = useDay();
  const {data : leaveSeat, isLoading} = useGetLeaveSeat(today.slice(0, 10));
  const [leaveSeatData, setLeaveSeatData] = useState<LeaveEntry[]>([]);
  useEffect(() => {
    if (!leaveSeat) return;

    const placeCount: Record<string, number> = {};
    leaveSeat.forEach((entry: LeaveEntry) => {
      placeCount[entry.place] = (placeCount[entry.place] || 0) + 1;
    });
    
    const filtered = leaveSeat.filter((entry : LeaveEntry) => placeCount[entry.place] >= 3);
    setLeaveSeatData(filtered);
  }, [leaveSeat]);
  if(isLoading) return <div>Loading...</div>
 return (
    <LeaveSeatContainer>
      <Map LeaveData={leaveSeatData} unLeaveData={leaveSeat}/>
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
    overflow: hidden;
`;
