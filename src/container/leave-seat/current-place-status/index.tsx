import * as S from "./style"
import { useState } from "react";

export default function CurrentPlaceStatus() {
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