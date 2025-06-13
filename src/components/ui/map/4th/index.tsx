import * as S from '../../../../container/leave-seat-form/location/map/style';
import {useNavigate} from "react-router-dom";

export default function Fourth() {
 const elements = [
  { id: 1, name: "", x: 12, y: 10.5, width: 16, height: 12.5 },
  { id: 2, name: "X", x: 12, y: 10.5, width: 11, height:8.5},
  { id: 3, name: "X", x: 25, y: 10.5, width: 54, height: 8.5},
  { id: 4, name: "X", x: 4, y: 10.5, width: 8, height: 12.5},
  { id: 5, name: "X", x: 81, y: 15.5, width: 7, height: 76},
  { id: 6, name: "X", x: 79, y: 10.5, width: 9, height: 5},
  { id: 7, name: "기숙사(4층)", x: 12, y: 23, width: 16, height: 47.5},
  { id: 8, name: "베르실7", x: 12, y: 19, width: 5.5, height: 4},
  { id: 9, name: "베르실8", x: 17.5, y: 19, width: 5.5, height: 4 },
  { id: 10, name: "베르실9", x: 25, y: 19, width: 3, height: 4 },

 ];
 const navigate = useNavigate()
 const handleClick = ()=>{
  navigate("/leaveSeat/form/time")
 }
 return(
   elements.map((el) => {
    return (<S.Element
      onClick={handleClick}
      key={el.id}
      $left={el.x}
      $top={el.y}
      $width={el.width}
      $height={el.height}
    >
     {el.name}
    </S.Element>)
   })
 )
}



