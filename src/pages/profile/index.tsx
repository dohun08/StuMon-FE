import * as S from './style';
import AfterSchool from '../../containers/afterSchool';
import { useState, useMemo } from 'react';
import useAuth from '../../store/auth';
import { useGetStudent } from '../../hooks/useAuth';

const DAY_KEY_MAP: Record<string, 'MON' | 'TUE' | 'WED' | 'THU'> = {
  월: 'MON',
  화: 'TUE',
  수: 'WED',
  목: 'THU',
};

export default function ProfilePage() {
  const [selectedDay, setSelectedDay] = useState<'월' | '화' | '수' | '목'>('월');
  const days: ('월' | '화' | '수' | '목')[] = ['월', '화', '수', '목'];

  const { userName, profile } = useAuth();
  const { data } = useGetStudent();

  const todaySchedule = useMemo(() => {
    if (!data?.after_school) return {};
    const key = DAY_KEY_MAP[selectedDay];
    return data.after_school[key] || {};
  }, [data, selectedDay]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Info>
          <S.ProfileImage src={`${profile}`} alt="Profile" />
          <S.Name>{userName}</S.Name>
          <S.Id>{data?.student_number}</S.Id>
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
          {Object.entries(todaySchedule).length > 0 ? (
            Object.entries(todaySchedule).map(([period, info]) => {
              const infoData = info as { t_name: string; name: string; place: string };
              return (
                <AfterSchool
                  key={period}
                  period={period}
                  teacher={infoData.t_name}
                  name={infoData.name}
                  place={infoData.place}
                />
              );
            })
          ) : (
            <AfterSchool
              key={"no_schedule"}
              period={"해당 요일에 방과후 일정이 없습니다."}
              teacher={"없음"}
              name={"없음"}
              place={"없음"}
            />
          )}
        </S.AfterSchoolList>
      </S.Wrapper>
    </S.Container>
  );
}