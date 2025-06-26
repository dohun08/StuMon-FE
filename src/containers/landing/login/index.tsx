import styled from "@emotion/styled";
import Google from "../../../assets/google.svg";
import Logo from "../../../assets/logo.svg";

export default function Login(){
  const handleLogin = () => {
    window.location.href = "http://localhost:8000/auth/login"
  }
  return(
    <Main>
      <img src={Logo} alt={"logo"} width={300} />
      <LoginBtn onClick={handleLogin}>
        Google로 로그인
        <GoogleIcon src={Google} alt={"googleIcon"} width={24} />
      </LoginBtn>
    </Main>
  )
}

export const Main = styled.main`
    width: 600px;
    height: 280px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`
export const LoginBtn = styled.div`
    width: 65%;
    border: 1px solid #999999;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    color: #303030;
    position: relative;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #f5f5f5;
    }
`
export const GoogleIcon = styled.img`
    position: absolute;
    top: 14px;
    left: 15px;
`