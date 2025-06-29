import { useState } from 'react';
import * as S from './style';
import MonthSelector from '../../containers/supervision/monthSelector';
import SupervisionItem from '../../containers/supervision/supervisionItem';
import { useGetSupervision } from '../../hooks/useSupervision';

interface SupervisionResponse {
  data: {
    week: string;
    day: string;
    date: string;
    self_study_teacher: {
      '7th_teacher': string | null;
      '8th_teacher': string | null;
      '10th_teacher': string | null;
    };
    leave_seat_teacher: {
      '7th_teacher': string | null;
      '8th_teacher': string | null;
      '10th_teacher': string | null;
    };
    night_teacher: string | null;
  }[];
}

const DAYS = ['월', '화', '수', '목'] as const;

const groupByWeek = (data: SupervisionResponse['data']) => {
  const weekMap = new Map<string, SupervisionResponse['data']>();
  data.forEach(item => {
    if (!weekMap.has(item.week)) weekMap.set(item.week, []);
    weekMap.get(item.week)!.push(item);
  });

  return Array.from(weekMap.entries()).map(([week, items]) => {
    const filledItems = DAYS.map(dayAbbr => {
      const found = items.find(i => i.day.includes(`(${dayAbbr})`));
      if (found) return found;

      return {
        week,
        date: '',
        day: dayAbbr,
        self_study_teacher: {
          '7th_teacher': null,
          '8th_teacher': null,
          '10th_teacher': null,
        },
        leave_seat_teacher: {
          '7th_teacher': null,
          '8th_teacher': null,
          '10th_teacher': null,
        },
        night_teacher: null,
      };
    });

    return { week, items: filledItems };
  });
};

export default function Supervision() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const { data: supervisionData, isError, isLoading } = useGetSupervision(selectedMonth);
  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러: {String(isError)}</div>;
  console.log('Supervision data:', supervisionData);

  const weeklyData = groupByWeek(supervisionData);

  return (
    <S.Wrapper>
      <MonthSelector selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      <S.SupervisionList>
        {weeklyData.map((weekGroup, index) => (
          <SupervisionItem key={index} weekData={weekGroup} />
        ))}
      </S.SupervisionList>
    </S.Wrapper>
  );
}