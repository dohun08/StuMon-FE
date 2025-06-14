import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  gap: 1rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Supervision = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SupervisionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-weight: 600;
`;
export const SupervisionTeacher = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;