import styled from "@emotion/styled";
import StudentForm from "../../../../containers/leave-seat-form/student";

export default function LeaveSeatFormStudent() {
 return (
    <LeaveSeatContainer>
      <StudentForm />
    </LeaveSeatContainer>
 )
}

const LeaveSeatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #F7F7F9;
  padding: 1.5rem 3rem;
`;