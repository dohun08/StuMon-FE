import styled from '@emotion/styled'
import AlertList from '../../../containers/AlertList/index'

export default function AlertPage() {
  return (
    <Wrapper>
      <h1>알림</h1>
      <AlertSection>
        <DeleteButtonContainer>
          <DeleteButton>모두 삭제</DeleteButton>
        </DeleteButtonContainer>
        <AlertList />
      </AlertSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 4rem;
`;

const AlertSection = styled.section`
  height: 100%;
`;

const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #ff3b30;
    text-decoration: underline;
  }
`;