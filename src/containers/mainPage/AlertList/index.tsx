import styled from "@emotion/styled";
import CircleFilledHat from '../../../assets/circle-filled-hat.svg';

interface Alert {
  id: number;
  title: string;
  content: string;
}

export default function AlertList() {

  const alertMockData: Alert[] = [
    { id: 1, title: "알림 제목 1", content: "알림 내용 1" },
    { id: 2, title: "알림 제목 2", content: "알림 내용 2" },
    { id: 3, title: "알림 제목 3", content: "알림 내용 3" },
    { id: 4, title: "알림 제목 4", content: "알림 내용 4" },
    { id: 5, title: "알림 제목 5", content: "알림 내용 5" },
    { id: 6, title: "알림 제목 6", content: "알림 내용 6" },
    { id: 7, title: "알림 제목 7", content: "알림 내용 7" },
    { id: 8, title: "알림 제목 8", content: "알림 내용 8" },
  ];

  return (
    <Wrapper>
      {alertMockData.map((alert) => (
        <AlertItem key={alert.id}>
          <img src={CircleFilledHat} />
          <Info>
            <h1>{alert.title}</h1>
            <span>{alert.content}</span>
          </Info>
        </AlertItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 65vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
const Info = styled.div`
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

const AlertItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;