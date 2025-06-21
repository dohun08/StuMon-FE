import { create } from 'zustand';
import dayjs from 'dayjs';

const hour = new Date().getHours();
const minute = new Date().getMinutes();

interface DayState {
 today: string;
 day: string;
 start: string;
 end: string;
 select: boolean;          // boolean으로 선언되어야 할 것 같아요 (원래 string인데 setSelect 타입이 string이면 string으로 하셔야 합니다)
 recordDay: string;
 period: (string);

 setDay: (newDay: string) => void;
 setStart: (newStart: string) => void;
 setEnd: (newEnd: string) => void;
 setSelect: (newSelect: boolean) => void;  // select가 boolean이라면 boolean 타입으로 변경
 setRecordDay: (newRecordDay: string) => void;
 updatePeriod: () => void;
}

const changeClass = () =>{
 const time = hour * 60 + minute;
 if(time >= 0 && time <= 16 * 60 + 9) return "7";
 else if(time >= 16 * 60 + 10 && time <= 18*60 + 9) return "8~9";
 else if(time >= 18*60 + 10 && time <= 24*60) return "10~11";
 else return "";
}

const useDay = create<DayState>((set) => ({
 today: dayjs().format('YYYY-MM-DD dddd'),
 day:'',
 start:'',
 end:'',
 select:false,
 recordDay : '',
 period : changeClass(),
 setDay:(newDay)=>set({day : newDay}),
 setStart:(newStart)=>set({start : newStart}),
 setEnd:(newEnd )=>set({end : newEnd}),
 setSelect:(newSelect )=>set({select : newSelect}),
 setRecordDay:(newRecordDay )=>set({recordDay : newRecordDay}),
 updatePeriod: () => set({ period: changeClass() })
}));

export default useDay;