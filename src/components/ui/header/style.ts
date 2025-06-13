import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 12.875rem;
  background-color: #EBF1FF;
  padding: 1.19rem;
  color: #6C757D;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
`;
export const Divider = styled.div`
  width: 100%;
  border-bottom: 2px solid #DFE6FD;
  flex-shrink: 0;
  margin: 2.4rem 0;
`;
export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.31rem;
`;
export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ active }) => (active ? "#2E6FF2" : "")};
  background: ${({ active }) => (active ? "#C7DAFF" : "transparent")};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;

  & > img {
    filter: ${({ active }) => active ? "brightness(0) saturate(100%) invert(38%) sepia(87%) saturate(5805%) hue-rotate(206deg) brightness(96%) contrast(101%)" : "none"};
    transition: filter 0.2s;
  }
`;