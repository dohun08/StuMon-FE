import styled from '@emotion/styled'
import AlertList from '../../../containers/AlertList/index'

export default function AlertPage() {
  return (
    <Wrapper>
      <h1>알림</h1>
      <AlertSection>
        <h4>모두 삭제</h4>
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

  h4 {
    color: #6c757d;
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #ff3b30;
      text-decoration: underline;
    }
  }
`;