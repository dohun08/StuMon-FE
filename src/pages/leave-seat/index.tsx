import RootLayout from "../../components/layout/RootLayout";
import styled from "@emotion/styled";
import CurrentSituation from "../../container/leave-seat/current-situation";
import CurrentPlaceStatus from "../../container/leave-seat/current-place-status";

export default function LeaveSeat() {
  return (
    <RootLayout>
      <LeaveSeatContainer>
       <LeaveSeatWrapper>
        <CurrentSituation />
        <CurrentPlaceStatus />
       </LeaveSeatWrapper>
      </LeaveSeatContainer>
    </RootLayout>
  )
}

const LeaveSeatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #F7F7F9;
  padding: 1.5rem 3rem;
    overflow: hidden;
`;

const LeaveSeatWrapper = styled.div`
 display: grid;
 width: 100%;
    height: 100%;
 grid-template-columns: 3fr 1fr;
 gap: 1.5rem;
`