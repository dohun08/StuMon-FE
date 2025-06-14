import Header from "../../ui/header";
import styled from "@emotion/styled";
import Bell from "../../../assets/icons/bell-bold.svg";
import { Outlet, useNavigate } from "react-router-dom";

export default function RootLayout() {
  const navigate = useNavigate();
  const handlePageChange = () => {
    navigate('/main/alert');
  }
  return (
    <Wrapper>
      <Header />
      <Content>
        <Info>
          <Welcome>
            <h2>안녕하세요 오주현님</h2>
            <p>오늘도 좋은 하루 되세요!</p>
          </Welcome>
          <AlertButton onClick={handlePageChange}>
            <img src={Bell} alt="Alert Icon" />
          </AlertButton>
        </Info>
        <Main>
          <Outlet />
        </Main>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.15rem 3rem;
  background: #FFF;
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h2 {
    margin: 0;
    padding: 0;  
  }

  p {
    margin: 0;
    color: #8C8C8C;
  }
`;

const AlertButton = styled.button`
  border-radius: 0.625rem;
  border: none;
  padding: 0.575rem 1.25rem;
  background: #EAECEF;
  cursor: pointer;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;