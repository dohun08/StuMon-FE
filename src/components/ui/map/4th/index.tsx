import * as S from '../../../../containers/leave-seat-form/location/map/style';
import {useNavigate} from "react-router-dom";
import type {LeaveEntry} from "../../../../pages/leave-seat";

export default function Fourth({LeaveData, unLeaveData} : {LeaveData:LeaveEntry[], unLeaveData:LeaveEntry[]}){ {
 const elements = [
  { id: 1, name: "", x: 12, y: 10.5, width: 16, height: 12.5 },
  { id: 2, name: "X", x: 12, y: 10.5, width: 11, height:8.5},
  { id: 3, name: "X", x: 25, y: 10.5, width: 54, height: 8.5},
  { id: 4, name: "X", x: 4, y: 10.5, width: 8, height: 12.5},
  { id: 5, name: "X", x: 81, y: 15.5, width: 7, height: 76},
  { id: 6, name: "X", x: 79, y: 10.5, width: 9, height: 5},
  { id: 7, name: "기숙사(4층)", x: 12, y: 23, width: 16, height: 47.5},
  { id: 8, name: "베르실7", x: 12, y: 19, width: 5.5, height: 4, whether:true},
  { id: 9, name: "베르실8", x: 17.5, y: 19, width: 5.5, height: 4, whether:true },
  { id: 10, name: "베르실9", x: 25, y: 19, width: 3, height: 4 , whether:true},

 ];

 const leave = LeaveData.map(elem => (elem.place));

 const navigate = useNavigate()
 const handleClick = (place:string)=>{
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
}}