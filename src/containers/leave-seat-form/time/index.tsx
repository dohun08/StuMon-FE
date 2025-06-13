import * as S from "./style.ts";
import DateInput from "../../../components/ui/dateInput";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import BackArrow from "../../../assets/icons/backArrow.svg"

export default function Time() {
  const [isTime,  setTime] = useState([
    true, false, false
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
  const { place } = location.state;
  const handleTime = () => {
    navigate("/leaveSeat/form/student", {state: {time: isTime, place : place}})
  }
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
              onClick={()=>handleChangeTime(0)}
              $status={isTime[0]}
            >7교시</S.TimeBtn>
            <S.TimeBtn
              onClick={()=>handleChangeTime(1)}
              $status={isTime[1]}
            >8~9교시</S.TimeBtn>
            <S.TimeBtn
              onClick={()=>handleChangeTime(2)}
              $status={isTime[2]}
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