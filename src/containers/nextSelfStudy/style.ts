import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(320deg, #2e6ff2 5.76%, #1b408c 111.02%);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 20px;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  gap: 0.5rem;
`;
export const RightSection = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const LeftSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const RemainDay = styled.h1``;
export const CheckButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 12px 20px;
  color: #2e5ff2;
  font-weight: 600;
  font-size: 1.05rem;
  background-color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f8f9ff;
    box-shadow: 0 4px 12px rgba(46, 95, 242, 0.2);
  }
`;