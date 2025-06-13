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
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Content = styled.div`
  width: 60%;
    padding: 2rem;
    border-radius: 5rem;
`