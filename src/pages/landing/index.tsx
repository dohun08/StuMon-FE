import * as S from './style.ts';
import LandingImg from "../../assets/landing.svg"
import Logo from "../../assets/logo.svg"
import Moniter from "../../assets/moniter.png"
import {useState} from "react";
import Modal from "../../components/layout/Modal/index.tsx";
import Login from "../../containers/landing/login/index.tsx";

export default function Landing(){
  const [isModalOpen, setIsMsodalOpen] = useState(false);
  const setModalClose = () => {
    setIsMsodalOpen(false);
  }
  const setModalOpen = () => {
    setIsMsodalOpen(true);
  }
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