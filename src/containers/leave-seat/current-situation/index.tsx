import * as S from "./style"
import React, {useEffect, useState} from "react";
import Exchange from '../../../assets/icons/exchange.svg';
import {useNavigate} from "react-router-dom";
import type {LeaveEntry} from "../../../pages/leave-seat";

export default function CurrentSituation({leaveData } : {leaveData : LeaveEntry[]}) {
 const [leaveSeatInputPlace, setLeaveSeatInputPlace] = useState("");
 const [isPeriod, setIsPeriod] = useState([false, false,  false]);
 const handleLeaveSeatInputPlace = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLeaveSeatInputPlace(e.target.value);
 }
 const width = window.screen.width;
 const MOBILE = 500;

 const [period, setPeriod] = useState<string[]>([]);
 const periodHandler = (index: number) => {
  const newIsPeriod = [...isPeriod];
  newIsPeriod[index] = !newIsPeriod[index];
  setIsPeriod(newIsPeriod);
 }
useEffect(()=>{
 setPeriod(isPeriod.reduce((acc : string[], value, index) => {
  if (value){
   if(index === 0) acc.push("7");
   else if(index === 1) acc.push("8~9");
   else if(index === 2) acc.push("10~11");
  }
  return acc;
 }, []))
}, [isPeriod]);
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
         이석 신청
        </S.ApplicationBtn>
      </S.TitleBox>
      <S.InputBox>
       <input
         type="text"
         value={leaveSeatInputPlace}
         onChange={(e)=>handleLeaveSeatInputPlace(e)}
         placeholder={"장소를 입력해주세요"}
       />
      </S.InputBox>
     <S.CheckBox>
      <div>
       <label>
       <input
         type={'checkbox'}
         checked={isPeriod[0]}
         onChange={()=>periodHandler(0)}
       />
       {width > MOBILE ? "7교시" : "7"}
       </label>
      </div>
      <div>
       <label>
       <input
         type={'checkbox'}
         checked={isPeriod[1]}
         onChange={()=>periodHandler(1)}
       />
       {width > MOBILE ? "8~9교시" : "8"}</label>
      </div>
      <div>
       <label>
       <input
         type={'checkbox'}
         checked={isPeriod[2]}
         onChange={()=>periodHandler(2)}
       />
       {width > MOBILE ? "10~11교시" : "10"}</label>
      </div>
     </S.CheckBox>
      <S.LeaveList>
       {leaveData.length !== 0 ? leaveData.map((data) => {
        if( period.includes(data.period) || period.length === 0){
         if(leaveSeatInputPlace === ""){
          return(
            <S.Leave key={data.id}>
             <S.LeaveInfo>
              <p>{data.place}</p>
              <p>{data.period}교시</p>
             </S.LeaveInfo>
             <S.LeaveStudentList>
              {data.students.map((student, index) => {
               return(
                 <p key={index}>{student}</p>
               )
              })}
             </S.LeaveStudentList>
            </S.Leave>
          )
         }
         else if(data.place.includes(leaveSeatInputPlace)){
          return(
            <S.Leave key={data.id}>
             <S.LeaveInfo>
              <p>{data.place}</p>
              <p>{data.period}교시</p>
             </S.LeaveInfo>
             <S.LeaveStudentList>
              {data.students.map((student, index) => {
               return(
                 <p key={index}>{student}</p>
               )
              })}
             </S.LeaveStudentList>
            </S.Leave>
          )
         }
        }
        else{
         return null;
        }
       }) : <h4>오늘의 이석이 없습니다.</h4>}
      </S.LeaveList>
    </S.CurrentPlaceStatusContainer>
  )
}