import styled from '@emotion/styled'
import AlertList from '../../../containers/mainPage/AlertList/index'
import { useDeleteAlert } from '../../../hooks/useAlert'

export default function AlertPage() {

  const { mutate: deleteAllAlerts } = useDeleteAlert();
  const handleDeleteAll = () => {
    alert('모든 알림을 삭제하시겠습니까?');
    deleteAllAlerts();
    window.location.reload();
  };

  return (
    <Wrapper>
      <h1>알림</h1>
      <AlertSection>
        <DeleteButtonContainer>
          <DeleteButton onClick={handleDeleteAll}>모두 삭제</DeleteButton>
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