import * as S from "./style"
import React, {useState} from "react";
import Exchange from '../../../assets/icons/exchange.svg';
import {useNavigate} from "react-router-dom";

export default function CurrentSituation() {
 const [leaveSeatInputPlace, setLeaveSeatInputPlace] = useState("");
 const [isPeriod, setIsPeriod] = useState([false, false,  false]);
 const handleLeaveSeatInputPlace = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLeaveSeatInputPlace(e.target.value);
 }
 const width = window.screen.width;
 const MOBILE = 500;
 const periodHandler = (index: number) => {
  const newIsPeriod = [...isPeriod];
  newIsPeriod[index] = !newIsPeriod[index];
  setIsPeriod(newIsPeriod);
 }

 const navigate = useNavigate();
 const handleMove = () =>{
  navigate('/leaveSeat/form/location')
 }
  return (
    <S.CurrentPlaceStatusContainer>
      <S.TitleBox>
        <h2>이석현황</h2>
        <S.ApplicationBtn onClick={handleMove}>
          <img src={Exchange} alt="Exchange Icon" />
         이선 신청
        </S.ApplicationBtn>
      </S.TitleBox>
      <S.InputBox>
       <input
         type="text"
         value={leaveSeatInputPlace}
         onChange={(e)=>handleLeaveSeatInputPlace(e)}
         placeholder={"장소나 학생을 입력해주세요"}
       />
      </S.InputBox>
     <S.CheckBox>
      <div>
       <input
         type={'checkbox'}
         checked={isPeriod[0]}
         onChange={()=>periodHandler(0)}
       />
       <label>{width > MOBILE ? "7교시" : "7"}</label>
      </div>
      <div>
       <input
         type={'checkbox'}
         checked={isPeriod[1]}
         onChange={()=>periodHandler(1)}
       />
       <label>{width > MOBILE ? "8~9교시" : "8"}</label>
      </div>
      <div>
       <input
         type={'checkbox'}
         checked={isPeriod[2]}
         onChange={()=>periodHandler(2)}
       />
       <label>{width > MOBILE ? "10~11교시" : "10"}</label>
      </div>
     </S.CheckBox>
      <S.LeaveList>
       <S.Leave>
        <S.LeaveInfo>
         <p>마이크로 프로세서실</p>
         <p>차수민(10~11교시)</p>
        </S.LeaveInfo>
        <S.LeaveStudentList>
         <p>이석현</p>
         <p>이석현</p>
         <p>이석현</p>
         <p>이석현</p>
        </S.LeaveStudentList>
       </S.Leave>
      </S.LeaveList>
    </S.CurrentPlaceStatusContainer>
  )
}