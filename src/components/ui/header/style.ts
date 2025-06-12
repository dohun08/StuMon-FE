import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 12.875rem;
  background-color: #EBF1FF;
  padding: 1.19rem;
  color: #6C757D;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
`;
export const Divider = styled.div`
  width: 100%;
  border-bottom: 2px solid #DFE6FD;
  flex-shrink: 0;
  margin: 2.7rem 0;
`;
export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.31rem;
`;
export const MenuItem = styled.div<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#0D6EFD" : "#6C757D")};
  background-color: ${({ active }) => (active ? "#E9F2FF" : "transparent")};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
`;