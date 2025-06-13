import * as S from "./style"
import {useEffect, useState} from "react";
import type {LeaveEntry} from "../../../pages/leave-seat/index.tsx";

export default function CurrentPlaceStatus({leaveData} : {leaveData:LeaveEntry[]}) {
  useEffect(() => {
    const initPlaceStatus = ()=>{
      const placeStatus =
        leaveData
          .filter((item) => item.place.startsWith("베르실"))
          .map((item) => {
        if(item.place === "베르실1") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실2") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실3") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실4") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실5") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실6") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실7") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실8") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        if(item.place === "베르실9") {
          let status = [false, false, false];
          if(item.period === "7") status[0] = true;
          else if(item.period === "8~9") status[1] = true;
          else if(item.period === "10~11") status[2] = true;
          return {
            placeStatus: status,
            placeName: item.place,
            placeId: item.id,
          };
        }
        else return {
          placeStatus: [false, false,  false],
          placeName: item.place,
          placeId: item.id,
        };
      });
      setPlaceStatus(placeStatus);
    }
    initPlaceStatus();
  }, []);
  const [placeStatus, setPlaceStatus] = useState([
    { placeStatus: [false, false,  false], placeName: "베르실1", placeId: 1 },
    { placeStatus: [false, false,  false], placeName: "베르실2", placeId: 2 },
    { placeStatus: [false, false,  false], placeName: "베르실3", placeId: 3 },
    { placeStatus: [false, false,  false], placeName: "베르실4", placeId: 4 },
    { placeStatus: [false, false,  false], placeName: "베르실5", placeId: 5 },
    { placeStatus: [false, false,  false], placeName: "베르실6", placeId: 6 },
    { placeStatus: [false, false,  false], placeName: "베르실7", placeId: 7 },
    { placeStatus: [false, false,  false], placeName: "베르실8", placeId: 8 },
    { placeStatus: [false, false,  false], placeName: "베르실9", placeId: 9 },
  ])
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
          {placeStatus.map((place) => (
            <tr key={place.placeId}>
              <th>{place.placeName}</th>
              <td><S.Status isOn={place.placeStatus[0]} /></td>
              <td><S.Status isOn={place.placeStatus[1]} /></td>
              <td><S.Status isOn={place.placeStatus[2]} /></td>
            </tr>
          ))}
        </S.Tbody>
      </S.Table>
    </S.CurrentPlaceStatusContainer>
  )
}