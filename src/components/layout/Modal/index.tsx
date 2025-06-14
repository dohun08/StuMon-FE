import styled from "@emotion/styled";
import React from "react";

export default function Modal({children, setModalOpen} : {children : React.ReactNode, setModalOpen : ()=>void}){
  return(
    <BlackContainer onClick={setModalOpen}>
      <Content onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </BlackContainer>
  )
}

const BlackContainer = styled.div`
  position: fixed;
  top: 0;
    z-index: 100;
  left: 0;
  width: 100vw;
  height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Content = styled.div`
    background: white;
  width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 2rem;
`