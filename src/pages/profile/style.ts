import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  padding: 3rem;
  border-radius: 1.25rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
`;
export const Name = styled.h1``;
export const Id = styled.span`
  font-size: 1.2rem;
`;
export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #6c757d;
  flex-shrink: 0;
  margin: 0 0 2.4rem 0;
`;
export const Days = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;
export const Day = styled.div<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? '#2e6ff2' : '#6c757d')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  cursor: pointer;
`;

export const AfterSchoolList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;