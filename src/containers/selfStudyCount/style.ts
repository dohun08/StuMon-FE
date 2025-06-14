import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`;
export const Title = styled.h2``;
export const ProgressBar = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #e2e2e2;
  border-radius: 100px;
`;
export const ProgressBarFill = styled.div < { width: number; }>`
  width: ${props => props.width}%;
  height: 100%;
  background-color: #2e6ff2;
  border-radius: 100px;
  transition: width 1s ease-in-out;
`;
export const CountSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Count = styled.span`
  font-weight: 600;
  color: #6f6f6f;
`;
export const RemainCount = styled.span`
  font-weight: 600;
  color: #6f6f6f;
`;