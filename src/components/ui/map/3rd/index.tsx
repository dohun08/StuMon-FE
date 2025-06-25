import * as S from '../../../../containers/leave-seat-form/location/map/style';
import {useNavigate} from "react-router-dom";
import type {LeaveEntry} from "../../../../pages/leave-seat";

export default function Third({LeaveData, unLeaveData} :  {LeaveData : LeaveEntry[], unLeaveData: LeaveEntry[]}) {
 const elements = [
  { id: 1, name: "", x: 4, y: 10.5, width: 8, height: 12.5},
  { id: 2, name: "", x: 12, y: 19, width: 16, height: 4},
  { id: 3, name: "커뮤니티홀", x: 12, y: 10.5, width: 11, height:8.5, whether : true},
  { id: 4, name: "3D프린터용제품제작실", x: 23, y: 13, width: 7, height: 6, whether : true},
  { id: 5, name: "모둠학습실", x: 30, y: 13, width: 5, height: 6, whether : true},
  { id: 6, name: "영어교과실", x: 35, y: 13, width: 5.5, height: 6, whether : true},
  { id: 7, name: "기숙사운영부", x: 40.5, y: 13, width: 3.5, height: 6},
  { id: 8, name: "계단", x: 44, y: 13, width: 2, height: 6},
  { id: 9, name: "3-1", x: 46, y: 13, width: 5.5, height: 6},
  { id: 10, name: "3-2", x: 51.5, y: 13, width: 5.5, height: 6},
  { id: 11, name: "3-3", x: 57, y: 13, width: 5.5, height: 6},
  { id: 12, name: "3-4", x: 62.5, y: 13, width: 5.5, height: 6},
  { id: 13, name: "학습지원실(3학년)", x: 68, y: 13, width: 3, height: 6, whether : true},
  { id: 14, name: "진로활동실", x: 71, y: 13, width: 6, height: 6, whether : true},
  { id: 15, name: "계단", x: 77, y: 13, width: 2, height: 6},
  { id: 16, name: "X", x: 81, y: 15.5, width: 7, height: 76},
  { id: 17, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5},
  { id: 18, name: "X", x: 79, y: 10.5, width: 9, height: 5},
  { id: 19, name: "베르실1", x: 4, y: 15, width: 3.5, height: 3, whether : true},
  { id: 20, name: "베르실2", x: 4, y: 18, width: 3.5, height: 5, whether : true},
  { id: 21, name: "베르실3", x: 8.5, y: 18, width: 3.5, height: 5, whether : true},
  { id: 22, name: "베르실5", x: 12, y: 19, width: 3.5, height: 4, whether : true},
  { id: 23, name: "베르실6", x: 15.5, y: 19, width: 3.5, height: 4, whether : true},
  { id: 24, name: "산학협력부", x: 8.5, y: 13, width: 3.5, height: 5, whether : true},
  { id: 25, name: "생활지원실", x: 19, y: 19, width: 2.5, height: 4},
  { id: 26, name: "기숙사(3층)", x: 12, y: 23, width: 16, height: 47.5},

 ];
 const leave = LeaveData.map(elem => (elem.place));
 const navigate = useNavigate()
const handleClick = (place : string)=>{
  navigate("/leaveSeat/form/time", {state: {place, unPlace : unLeaveData}})
}
 return(
   elements.map((el) => {
    const whether = leave.includes(el.name);
    return(<S.Element
      onClick={()=>{
       if(whether){
        return alert("이미 예약된 자리입니다")
       }
        if(el.whether){
          handleClick(el.name)
        }
      }}
      key={el.id}
      $left={el.x}
      $top={el.y}
      $width={el.width}
      $height={el.height}
      $cursor={el.whether}
      $background={whether? "#F87067" : el.whether ? "#84FFC7" : "#DDDDDD"}
    >
     {el.name}
    </S.Element>)
   })
 )
}



