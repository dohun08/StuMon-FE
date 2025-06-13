import styled from "@emotion/styled";

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    padding: 3% 6%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const ImgBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`

export const Main = styled.main`
    width: 100%;
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    
`
export const LogoBox = styled.div`
    width: 70%;
    & > img{
        filter: brightness(0) invert(1);
    }
`
export const Content = styled.div`
    width: 70%;
    padding: 1%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    img{
        width: 60%;
    }
`
export const TextBox = styled.div`
  display: flex;
    flex-direction: column;
    gap: 3rem;
    & > h1{
        font-size: 5rem;
        font-weight: 700;
        line-height: 3.5rem;
        color: white;
`
export const btn = styled.button`
    all: unset;
    text-align: center;
    width: 15rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #2260dd;
    }

    height: 3rem;
    border-radius: 1rem;
    background-color: #2E6FF2;
    font-size: 1.3rem;
    color: white;
`