import * as S from "./style.ts";
import DateInput from "../../../components/ui/dateInput";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import BackArrow from "../../../assets/icons/backArrow.svg"
import type {LeaveEntry} from "../../../pages/leave-seat";

export default function Time() {
  const [isTime,  setTime] = useState([
    false, false, false
  ]);
  const handleChangeTime = (value:number) => {
    let newTime = [false, false, false];
    newTime[value] = true;
    setTime(newTime);
  }
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const location = useLocation();
  const { place, unPlace } = location.state;
  const handleTime = () => {
    let period = "";
    const time = isTime.findIndex((value) => value);
    console.log(time)
    if (time === -1) {
      alert("시간을 선택해주세요")
      return
    }
    else if(time === 0) period = "SEVEN";
    else if(time === 1) period = "EIGHT_NIGHT";
    else if(time === 2) period = "TEN_ELEVEN";

    navigate("/leaveSeat/form/student", {state: {time: period, place : place}})
  }
  const [unPlaceData, setUnPlaceData] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const newUnPlace = unPlace.filter((item : LeaveEntry)=>item.place===place)
    const array = [false, false, false];
    newUnPlace.map((item : LeaveEntry)=>{
      if(item.period === "SEVEN") array[0] = true;
      else if(item.period === "EIGHT_NIGHT") array[1] = true;
      else if(item.period === "TEN_ELEVEN") array[2] = true;
    })
    setUnPlaceData(array)
  }, [unPlace])
  return (
    <S.TimeContainer>
      <S.ImgBox onClick={handleBack}>
        <img src={BackArrow}  alt="backIcon" />
      </S.ImgBox>
      <S.Content>
        <h2>시간을 설정해주세요</h2>
        <S.DateBox>
          <S.DateTitle>날짜</S.DateTitle>
         <DateInput  />
        </S.DateBox>
        <S.DateBox>
          <S.DateTitle>시간</S.DateTitle>
          <S.TimeBox>
            <S.TimeBtn
              onClick={()=> {
                if(unPlaceData[0]){
                  alert("7교시는 오늘 이석이 되어있습니다.")
                  return
                }
                handleChangeTime(0)
              }}
              $status={isTime[0]}
              $unPlace={unPlaceData[0]}
            >7교시</S.TimeBtn>
            <S.TimeBtn
              onClick={()=> {
                if(unPlaceData[1]){
                  alert("8~9교시는 오늘 이석이 되어있습니다.")
                  return
                }
                handleChangeTime(1)
              }}
              $status={isTime[1]}
              $unPlace={unPlaceData[1]}
            >8~9교시</S.TimeBtn>
            <S.TimeBtn
	            
              onClick={()=> {
                if(unPlaceData[2]){
                  alert("10~11교시는 오늘 이석이 되어있습니다.")
                  return
                }
                handleChangeTime(2)
              }}
              $status={isTime[2]}
              $unPlace={unPlaceData[2]}
            >10~11교시</S.TimeBtn>
          </S.TimeBox>
        </S.DateBox>
      </S.Content>
      <S.Btn onClick={handleTime}>
        다음으로
      </S.Btn>
    </S.TimeContainer>
  )
}