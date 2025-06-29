import * as S from './style';

interface AfterSchoolProps {
  period: string;
  teacher: string;
  name: string;
  place: string;
}

export default function AfterSchool({ period, teacher, name, place }: AfterSchoolProps) {
  const realPeriod = period === "EIGHT_NIGHT" ? "8~9교시" : period === "TEN_ELEVEN" ? "10~11교시" : period;
  return (
    <S.Wrapper>
      <S.Period>{realPeriod}</S.Period>
      <S.Table>
        <thead>
          <tr>
            <S.Th>선생님</S.Th>
            <S.Th>이름</S.Th>
            <S.Th>장소</S.Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.Td>{teacher}</S.Td>
            <S.Td>{name}</S.Td>
            <S.Td>{place}</S.Td>
          </tr>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
}