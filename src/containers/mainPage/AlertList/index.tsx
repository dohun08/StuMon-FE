import styled from "@emotion/styled";
import CircleFilledHat from '../../../assets/circle-filled-hat.svg';
import { useGetAlert, usePostAlert } from "../../../hooks/useAlert";

interface Alert {
  id: number;
  title: string;
  content: string;
  is_read?: boolean;
}

export default function AlertList() {
  const { data = [] } = useGetAlert();
  const { mutate: markRead } = usePostAlert();

  const handleClick = (alert: Alert) => {
    if (!alert.is_read) {
      markRead(alert.id);
    }
  };

  return (
    <Wrapper>
      {data.map((alert: Alert) => (
        <AlertItem
          key={alert.id}
          read={alert.is_read}
          onClick={() => handleClick(alert)}
        >
          <img src={CircleFilledHat} alt="" />
          <Info>
            <h1>{alert.title}</h1>
            <span>{alert.content}</span>
          </Info>
        </AlertItem>
      ))}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: 65vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const AlertItem = styled.div<{ read?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: ${({ read }) =>
    read ? "inset 0 0 0 1px #DFE6FD" : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  background-color: ${({ read }) => (read ? "#F7F7F9" : "#FFFFFF")};
  cursor: ${({ read }) => (read ? "default" : "pointer")};
  transition: background-color 0.2s, box-shadow 0.2s;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    opacity: ${({ read }) => (read ? 0.4 : 1)};
  }
`;

export const Info = styled.div`
  margin-left: 1rem;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  span {
    font-size: 1rem;
    color: #666;
  }
`;