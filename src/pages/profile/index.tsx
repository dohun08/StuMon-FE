import * as S from './style';
import AfterSchool from '../../containers/afterSchool';
import { useState } from 'react';

export default function ProfilePage() {
  const [selectedDay, setSelectedDay] = useState<string>('월');
  const days = ['월', '화', '수', '목'];

  return (
    <S.Container>
      <S.Wrapper>
        <S.Info>
          <S.ProfileImage src="https://cdn.domi.kr/NZtN6qA1zdwrRdfFiGF1NiLuXSTJAt.png" alt="Profile" />
          <S.Name>윤도훈</S.Name>
          <S.Id>2학년 2반 9번</S.Id>
        </S.Info>
        <S.Divider />
        <S.Days>
          {days.map((day) => (
            <S.Day
              key={day}
              selected={selectedDay === day}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </S.Day>
          ))}
        </S.Days>
        <S.AfterSchoolList>
          <AfterSchool period={"8~9교시"} teacher={"곽상미"} name={"스프링 부트를 이용한 웹서비스 개발"} place={"프로그래밍실1"} />
          <AfterSchool period={"10~11교시"} teacher={"곽상미"} name={"스프링 부트를 이용한 웹서비스 개발"} place={"프로그래밍실1"} />
        </S.AfterSchoolList>
      </S.Wrapper>
    </S.Container>
  );
}