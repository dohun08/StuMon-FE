import * as S from "./style"
import { useEffect, useState } from "react";
import Exchange from '../../../assets/icons/exchange.svg';
import { useNavigate } from "react-router-dom";
import type { LeaveEntry } from "../../../pages/leave-seat";
import Loading from "../../../components/ui/loading";

export default function CurrentSituationNonSearch({ leaveData , isLoading}: { leaveData: LeaveEntry[] , isLoading : boolean}) {
  const [isPeriod, _setIsPeriod] = useState([false, false, false]);
  const [period, setPeriod] = useState<string[]>([]);
  useEffect(() => {
    setPeriod(isPeriod.reduce((acc: string[], value, index) => {
      if (value) {
        if (index === 0) acc.push("7");
        else if (index === 1) acc.push("8~9");
        else if (index === 2) acc.push("10~11");
      }
      return acc;
    }, []))
  }, [isPeriod]);
  const navigate = useNavigate();
  const handleMove = () => {
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
      <S.LeaveList>
        { isLoading ? <Loading /> : leaveData.map((data) => {
          if (period.includes(data.period) || period.length === 0) {
            return (
              <S.Leave key={data.id}>
                <S.LeaveInfo>
	                <S.StyledStatus status={data.status}>{data.status==="PENDING" ? "대기중" : "완료"}</S.StyledStatus>
	                <p>{data.place}</p>
                  <p>({data.period}교시)</p>
                </S.LeaveInfo>
                <S.LeaveStudentList>
                  {data.students.map((student, index) => {
                    return (
                      <p key={index}>{student}</p>
                    )
                  })}
                </S.LeaveStudentList>
              </S.Leave>
            )
          }
          else {
            return null;
          }
        })}
      </S.LeaveList>
    </S.CurrentPlaceStatusContainer>
  )
}