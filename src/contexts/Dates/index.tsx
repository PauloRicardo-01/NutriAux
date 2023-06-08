import { createContext, ReactNode, useEffect, useState } from "react";

type DatesContextType = {
  currentWeek: Date[] | [];
  selectedIndex: number;
  selectedDay: number;
  getYearDates: (ano: number) => void;
  selectDay: (index: number, day: number) => void;
  getPreviousWeek: () => void;
  getNextWeek: () => void;
};

export const DatesContext = createContext({} as DatesContextType);

export function DatesProvider({ children }: { children: ReactNode }) {
  const [weeks, setWeeks] = useState<Date[][] | []>([]);
  const [currentWeek, setCurrentWeek] = useState<Date[] | []>([]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(0);

  function getYearDates(ano: number) {
    const date: Date = new Date(ano, 0, 1);
    let tempDates: Date[] = [];
    let tempWeeks: Date[][] = [];
    let tempCurrentWeek: Date[] = [];
    let isCurrentWeek = false;

    let i = 0;
    let firtsWeek = true;
    while (date.getFullYear() === ano) {
      const newDate = new Date(date);
      const nextDay = date.getDate() + 1;

      if (!firtsWeek && (newDate.getDay() === 0 || date.getDate() === 1)) {
        while (tempDates.length < 7) {
          if (tempDates[0].getDate() === 1) {
            tempDates.splice(0, 0, new Date(1899, 0, 1, 0, 0, 0, 0));
          } else {
            tempDates.push(new Date(1899, 0, 1, 0, 0, 0, 0));
          }
        }

        tempWeeks.push(tempDates);

        if (isCurrentWeek) {
          setCurrentWeekIndex(i);
          setCurrentWeek(tempWeeks[i]);
          tempCurrentWeek = tempWeeks[i];
          isCurrentWeek = false;
        }

        tempDates = [];
        i++;
      }

      if (newDate.toDateString() === new Date().toDateString()) {
        isCurrentWeek = true;
      }

      tempDates.push(newDate);
      date.setDate(nextDay);

      firtsWeek = false;
    }

    setWeeks(tempWeeks);

    tempCurrentWeek.forEach((day, i) => {
      if (day.toDateString() === new Date().toDateString()) {
        selectDay(i, day.getDate());
      }
    });
  }

  function selectDay(index: number, day: number) {
    setSelectedIndex(index);
    setSelectedDay(day);
  }

  function getPreviousWeek() {
    setCurrentWeek(weeks[currentWeekIndex - 1]);
    setCurrentWeekIndex(currentWeekIndex - 1);
  }

  function getNextWeek() {
    setCurrentWeek(weeks[currentWeekIndex + 1]);
    setCurrentWeekIndex(currentWeekIndex + 1);
  }

  useEffect(() => {
    getYearDates(2023);
  }, []);

  return (
    <DatesContext.Provider
      value={{
        currentWeek,
        selectedIndex,
        selectedDay,
        selectDay,
        getYearDates,
        getPreviousWeek,
        getNextWeek,
      }}
    >
      {children}
    </DatesContext.Provider>
  );
}
