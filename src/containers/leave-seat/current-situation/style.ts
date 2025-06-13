import styled from "@emotion/styled";

const FLEXBOX = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const CurrentPlaceStatusContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
    height: 100%;
    gap: 1rem;
`;
export const TitleBox = styled(FLEXBOX)`
  
`;
export const InputBox = styled(FLEXBOX)`
 & > input{
     all: unset;
     border-radius: 0.5rem;
     padding: 0.5rem 1rem;
     width: 100%;
     box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
 }
`;

export const CheckBox = styled(FLEXBOX)`
 justify-content: left;
    gap: 1.25rem;
    display: flex;
    align-items: center;
    & > div{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
export const LeaveList = styled(FLEXBOX)`
    height: 52vh;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: scroll;
    padding: 1px;
`;
export const Leave = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
    padding: 1.5rem 3rem;
    width: 100%;
    border-radius: 0.65rem;
`
export const LeaveInfo = styled.div`
    & > p:nth-child(1){
        color: black;
        font-size: 1.25rem;
        font-weight: bold;
    }   
 & > p:nth-child(2){
     color: #8c8c8c;
     font-size: 0.75rem;
 }
`
export const LeaveStudentList = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 0.5rem;
    color: #6C757D;
    font-weight: 600;
    overflow: hidden;       
    white-space: nowrap;    

    p {
        max-width: max-content;            
        text-overflow: ellipsis;     
        white-space: nowrap;         
    }
`;

export const ApplicationBtn = styled.button`
    all: unset;
    cursor: pointer;
    background-color: #2E6FF2;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    display: flex;
    gap: 0.5rem;
    font-weight: bold;
    align-items: center;
    transition: 0.3s;

    & > img {
        width: 1.5rem;
        filter: brightness(0) saturate(100%) invert(100%);
        transition: filter 0.2s;
    }

    &:hover {
        background-color: #3879fc;
    }
`;
