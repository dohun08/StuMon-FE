import * as S from "./style.ts";
import BackArrow from "../../../assets/icons/backArrow.svg"
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useDay from "../../../store/day.ts";
import {searchStudent} from "../../../service/auth.ts";
import useDebounce from "../../../hooks/useDebounce.ts";
import {useCreateLeaveSeat} from "../../../hooks/useLeaveSeat.ts";
import type {Student} from "../../../pages/leave-seat/form/student";

export default function StudentForm() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  const [cause, setCause] = useState("");

  const [student, setStudent] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [selectStudent, setSelectStudent] = useState<Student[]>([]);
  const [studentNumbers, setStudentNumbers] = useState<number[]>([]);
  const location = useLocation();
  const { place, time } = location.state;
  const {day} = useDay();
  const debouncedSearch = useDebounce(() => searchStudent(search, setStudent), 100);

  useEffect(() => {
    if (search) debouncedSearch();
  }, [search]);

  const {mutate} = useCreateLeaveSeat();

  const handleSelect = () => {
    mutate({date : day, place_name: place, period :time, cause, students: selectStudent});
  };
  return (
    <S.TimeContainer>
      <S.ImgBox onClick={handleBack}>
        <img src={BackArrow}  alt="backIcon" />
      </S.ImgBox>
      <S.Content>
        <h2>이석 사유와 학생을 입력해주세요</h2>
        <S.DateBox>
          <S.DateTitle>사유</S.DateTitle>
          <S.Reason
            value={cause}
            onChange={(event) => setCause(event.target.value)}
            placeholder={"사유를 입력해주세요"}
          />
        </S.DateBox>
        <S.DateBox>
          <S.DateTitle>학생</S.DateTitle>
          <S.InputBox>
            <S.Input
              type={"text"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"이름을 입력해주세요"}
            />
            <S.StudentList>
              {search && student &&
                student.map((currentItem) => {
                  if (studentNumbers.includes(currentItem.student_number)) {
                    return null;
                  }
                  else {
                    return (
                      <S.StudentItem
                        onClick={() => {
                          setStudentNumbers((prev) => [...prev, currentItem.student_number]);
                          setSelectStudent((prev) => [...prev, currentItem]);
                          setSearch("");
                        }}
                        key={currentItem.student_number}
                      >
                        {currentItem.student_number} {currentItem.name}
                      </S.StudentItem>
                    );
                  }
                })
              }
            </S.StudentList>
          </S.InputBox>
          <S.StudentBox>
            {selectStudent && selectStudent.map((item, idx) => {
            return(
            <S.Student
              key={idx}
              onClick={() =>{
                setStudentNumbers(
                  studentNumbers.filter(
                    (currentItem) => currentItem !== item.id
                  )
                )
                setSelectStudent(
                  selectStudent.filter(
                    (currentItem) => currentItem !== item
                  )
                )
              }}
            >
              <span>{item.student_number} {item.name}</span>
            </S.Student>
            )
          })}
          </S.StudentBox>
        </S.DateBox>
      </S.Content>
      <S.Btn onClick={()=>{
        handleSelect()
      }}>
        완료
      </S.Btn>
    </S.TimeContainer>
  )
}