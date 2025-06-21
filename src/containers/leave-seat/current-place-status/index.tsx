import * as S from "./style"
import {useEffect, useState} from "react";
import type {LeaveEntry} from "../../../pages/leave-seat/index.tsx";
type PlaceStatusMap = {
  [key: string]: {
    placeStatus: boolean[];
    placeId: number;
  };
};

export default function CurrentPlaceStatus({leaveData} : {leaveData:LeaveEntry[]}) {
  const [placeStatus, setPlaceStatus] = useState<PlaceStatusMap>({
    "베르실1": { placeStatus: [false, false, false], placeId: 1 },
    "베르실2": { placeStatus: [false, false, false], placeId: 2 },
    "베르실3": { placeStatus: [false, false, false], placeId: 3 },
    "베르실4": { placeStatus: [false, false, false], placeId: 4 },
    "베르실5": { placeStatus: [false, false, false], placeId: 5 },
    "베르실6": { placeStatus: [false, false, false], placeId: 6 },
    "베르실7": { placeStatus: [false, false, false], placeId: 7 },
    "베르실8": { placeStatus: [false, false, false], placeId: 8 },
    "베르실9": { placeStatus: [false, false, false], placeId: 9 },
  })

  useEffect(() => {
    const initPlaceStatus = ()=>{
      let place = {...placeStatus};
      leaveData.map((item : LeaveEntry)=>{
        if(item.place.startsWith("베르실")){
          if(item.period === "7") place[item.place].placeStatus[0] = true;
          else if(item.period === "8~9") place[item.place].placeStatus[1] = true;
          else if(item.period === "10~11") place[item.place].placeStatus[2] = true;
        }
      })
      setPlaceStatus(place);
    }
    initPlaceStatus();
  }, [leaveData]);
  console.log(placeStatus);
  return (
    <S.CurrentPlaceStatusContainer>
      <S.Table>
        <thead>
        <tr>
          <S.Th width={"12.4rem"}></S.Th>
          <S.Th width={"7.188rem"}>7</S.Th>
          <S.Th width={"7.188rem"}>8~9</S.Th>
          <S.Th width={"7.188rem"}>10~11</S.Th>
        </tr>
        </thead>
        <S.Tbody>
          {Object.keys(placeStatus).map((place) => (
            <tr key={placeStatus[place].placeId}>
              <th>{place}</th>
              <td><S.Status isOn={placeStatus[place].placeStatus[0]} /></td>
              <td><S.Status isOn={placeStatus[place].placeStatus[1]} /></td>
              <td><S.Status isOn={placeStatus[place].placeStatus[2]} /></td>
            </tr>
          ))}
        </S.Tbody>
      </S.Table>
    </S.CurrentPlaceStatusContainer>
  )
}