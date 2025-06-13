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
export const Reason= styled.textarea`
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 14px;
    outline: none;
    resize: none;
    height: 100%;
`
export const InputBox= styled.div`
    border: 1px solid #ccc;
    width: 250px;
    border-radius: 8px;
    padding: 10px 15px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    font-size: 14px;
    position: relative;
`
export const Input = styled.input`
    border: none;
    width: 100%;
    outline: none;
`
export const StudentList = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    max-height: 180px;
    z-index: 3;
    overflow-y: scroll;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #B0BEC5 #F5F5F5; /* 스크롤바 색상 (Foreground/Background) */

    /* Chrome, Safari, Edge */

    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #F5F5F5; /* 트랙 색상 */
        border-radius: 8px; /* 트랙 둥글게 */
    }

    &::-webkit-scrollbar-thumb {
        background: #B0BEC5; /* 스크롤바 색상 */
        border-radius: 8px; /* 스크롤바 둥글게 */
        border: 2px solid #F5F5F5; /* 스크롤바와 트랙 간 간격 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #90A4AE; /* Hover 시 스크롤바 색상 */
    }
    
`

export const StudentItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
        background: #F2F3F6;
    }
`
export const StudentBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    height: 90px;
    overflow: auto;
`
export const Student = styled.div`
    border: 2px solid #2E6FF2;
    color: #2E6FF2;
    background: white;
    padding: 7px 20px;
    border-radius: 30px;
    font-weight: 550;
    cursor: pointer;
    height: max-content;
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`