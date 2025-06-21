import styled from "@emotion/styled";

export const TimeContainer = styled.div`
    display: grid;
    grid-template-rows: 10fr 1fr; /* ← 세로로 3:1 비율 */
    gap: 1.5rem;
    align-items: center;
    background-color: #ffffff;
    padding: 3rem 6rem;
    width: 70%;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    border-radius: 0.8rem;
    height: 100%;
`;
export const ImgBox = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
    flex: 1;
    height: 100%;
`
export const Btn = styled.button`
  all: unset;
    box-sizing: border-box;
    height: 100%;
  border-radius: 0.5rem;
    text-align: center;
    font-weight: 600;
  padding: 0.5rem 1rem;
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #2E6FF2;
  color: white;
  cursor: pointer;
`
export const DateBox = styled.div`
  gap: 1.2rem;
    display: flex;
    flex-direction: column;
`
export const DateTitle = styled.p`
 font-size: 1.2rem;
`
export const TimeBtn = styled.button<{ $status: boolean, $unPlace : boolean }>`
    max-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.$status ? "white" : "#2E6FF2"};
    color: ${(props) => props.$status ? "#2E6FF2" : "white"};
    padding: 6px 25px;
    border-radius: 40px;
    border: 2px solid #2E6FF2;
    cursor: ${props => props.$unPlace ? "not-allowed" : "pointer"};
    transition: 0.1s;
    font-weight: 600;
    &:hover {
        background: ${(props)=>props.$status ?"white" : "#2a65dd"};
        color: ${(props)=>props.$status ? "#2E6FF2" : "white"};
    }
    @media (max-width: 400px) {
        width: 30px;
        padding: 0;
    }
`;
export const TimeBox = styled.div`
    display: flex;
    gap: 0.675rem;
    align-items: center;
`