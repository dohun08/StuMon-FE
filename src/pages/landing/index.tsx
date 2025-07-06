import * as S from './style.ts';
import LandingImg from "../../assets/landing.svg"
import Logo from "../../assets/logo.svg"
import Moniter from "../../assets/moniter.png"
import {useEffect, useState} from "react";
import Modal from "../../components/layout/Modal/index.tsx";
import Login from "../../containers/landing/login/index.tsx";
import {useNavigate} from "react-router-dom";

export default function Landing(){
  const [isModalOpen, setIsMsodalOpen] = useState(false);
  const setModalClose = () => {
    setIsMsodalOpen(false);
  }
  const setModalOpen = () => {
    setIsMsodalOpen(true);
  }
	const navigate = useNavigate();
	
	useEffect(() => {
		const token = localStorage.getItem("AT");
		if (token) {
			try {
				const [, payloadBase64] = token.split('.');
				const payload = JSON.parse(atob(payloadBase64));
				const now = Math.floor(Date.now() / 1000);
				
				if (payload.exp && payload.exp > now) {
					// 유효한 토큰
					navigate('/main');
				} else {
					// 만료된 토큰
					localStorage.removeItem("AT");
				}
			} catch (e) {
				console.error("⚠️ 토큰 파싱 실패", e);
				localStorage.removeItem("AT");
			}
		}
	}, [navigate]);
  return(
      <S.Wrap>
        {isModalOpen &&
        <Modal setModalOpen={setModalClose}>
          <Login />
        </Modal> }
        <S.ImgBox>
          <img src={LandingImg} alt={"main"} />
        </S.ImgBox>
        <S.Main>
          <S.LogoBox>
            <img src={Logo} alt={"logo"} />
          </S.LogoBox>
          <S.Content>
            <S.TextBox>
              <h1>이석이</h1>
              <h1>필요한</h1>
              <h1>순간일때</h1>
              <S.btn onClick={setModalOpen}>사용하기</S.btn>
            </S.TextBox>
            <img src={Moniter} alt={"moniter"} />
          </S.Content>
        </S.Main>
      </S.Wrap>
  )
}