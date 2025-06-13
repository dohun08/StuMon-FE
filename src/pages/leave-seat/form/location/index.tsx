import styled from "@emotion/styled";
import Map from "../../../../containers/leave-seat-form/location/map";

export function LeaveSeatFormLocation() {
 return (
    <LeaveSeatContainer>
      <Map/>
    </LeaveSeatContainer>
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
