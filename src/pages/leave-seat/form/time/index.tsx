import RootLayout from "../../../../components/layout/RootLayout";
import styled from "@emotion/styled";
import Time from "../../../../containers/leave-seat-form/time";


export default function LeaveSeatFormTime() {
 return (
   <RootLayout>
    <LeaveSeatContainer>
      <Time />
    </LeaveSeatContainer>
   </RootLayout>
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
