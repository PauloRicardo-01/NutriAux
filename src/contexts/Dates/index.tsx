import { createContext, ReactNode, useEffect, useState } from "react";
import { DayType, FoodType } from "../../types";

type DatesContextType = {
  weeks: string[][] | [];
  currentWeek: string[] | [];
  selectedIndex: number;
  selectedDay: string;
  days: Map<string, DayType>;
  performAnimation: boolean;
  getYearDates: (ano: number) => void;
  selectDay: (index: number, day: string) => void;
  getPreviousWeek: () => void;
  getNextWeek: () => void;
};

export const DatesContext = createContext({} as DatesContextType);

export function DatesProvider({ children }: { children: ReactNode }) {
  const [weeks, setWeeks] = useState<string[][] | []>([]);
  const [currentWeek, setCurrentWeek] = useState<string[] | []>([]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [days, setDays] = useState<Map<string, DayType>>(new Map());
  const [performAnimation, setPerformAnimation] = useState(false);

  const randomFoods: FoodType[] = [
    { name: "Arroz", calories: 100, proteins: 10, carbs: 20, fats: 30 },
    { name: "Feijão", calories: 200, proteins: 20, carbs: 30, fats: 40 },
    { name: "Carne", calories: 300, proteins: 30, carbs: 40, fats: 50 },
    { name: "Salada", calories: 400, proteins: 40, carbs: 50, fats: 60 },
    { name: "Batata", calories: 500, proteins: 50, carbs: 60, fats: 70 },
    { name: "Ovo", calories: 600, proteins: 60, carbs: 70, fats: 80 },
    { name: "Macarrão", calories: 700, proteins: 70, carbs: 80, fats: 90 },
    { name: "Pão", calories: 800, proteins: 80, carbs: 90, fats: 100 },
    { name: "Bolo", calories: 900, proteins: 90, carbs: 100, fats: 110 },
    { name: "Biscoito", calories: 1000, proteins: 100, carbs: 110, fats: 120 },
  ];

  function getYearDates(ano: number): string[][] {
    const date: Date = new Date(ano, 0, 1);
    let tempDates: string[] = [];
    let tempWeeks: string[][] = [];
    let tempCurrentWeek: string[] = [];
    let isCurrentWeek = false;

    let i = 0;
    let firtsWeek = true;
    while (date.getFullYear() === ano) {
      const newDate = new Date(date);
      const nextDay = date.getDate() + 1;

      if (!firtsWeek && (newDate.getDay() === 0 || date.getDate() === 1)) {
        while (tempDates.length < 7) {
          if (tempDates[0].substring(0, 2) === "01") {
            tempDates.splice(0, 0, "01/01/0001");
          } else {
            tempDates.push("");
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

      tempDates.push(newDate.toLocaleDateString("pt-BR"));
      date.setDate(nextDay);

      firtsWeek = false;
    }

    setWeeks(tempWeeks);

    tempCurrentWeek.forEach((day, i) => {
      if (day === new Date().toLocaleDateString("pt-BR")) {
        selectDay(i, day);
      }
    });

    return tempWeeks;
  }

  function selectDay(index: number, day: string) {
    setSelectedIndex(index);
    setSelectedDay(day);
    setPerformAnimation(true);
  }

  function getPreviousWeek() {
    setCurrentWeek(weeks[currentWeekIndex - 1]);
    setCurrentWeekIndex(currentWeekIndex - 1);
    setPerformAnimation(false);
  }

  function getNextWeek() {
    setCurrentWeek(weeks[currentWeekIndex + 1]);
    setCurrentWeekIndex(currentWeekIndex + 1);
    setPerformAnimation(false);
  }

  function setAllDays(weeksParam: string[][]) {
    const tempDays: Map<string, DayType> = new Map();

    weeksParam.forEach((week) => {
      week.forEach((weekDay) => {
        const newDayData: DayType = {
          date: weekDay,
          totalCalories: 0,
          caloriesGoal: 4000,
          proteins: 0,
          proteinsGoal: 150,
          carbs: 0,
          carbsGoal: 150,
          fats: 0,
          fatsGoal: 150,
          meals: [
            {
              name: "Café da manhã",
              calories: 0,
              proteins: 0,
              carbs: 0,
              fats: 0,
              foods: [],
            },
            {
              name: "Almoço",
              calories: 0,
              proteins: 0,
              carbs: 0,
              fats: 0,
              foods: [],
            },
            {
              name: "Jantar",
              calories: 0,
              proteins: 0,
              carbs: 0,
              fats: 0,
              foods: [],
            },
          ],
        };

        newDayData.meals.forEach((_, index) => {
          addFoodToMeal(
            newDayData,
            index,
            randomFoods[Math.floor(Math.random() * 10)]
          );
        });

        if (weekDay.substring(6, 10) !== "0001" && weekDay !== "") {
          tempDays.set(weekDay, newDayData);
        }
      });
    });

    setDays(tempDays);
  }

  function addFoodToMeal(day: DayType, mealIndex: number, food: FoodType) {
    day.meals[mealIndex].foods.push(food);

    day.meals[mealIndex].calories += food.calories;
    day.meals[mealIndex].proteins += food.proteins;
    day.meals[mealIndex].carbs += food.carbs;
    day.meals[mealIndex].fats += food.fats;

    day.totalCalories += food.calories;
    day.proteins += food.proteins;
    day.carbs += food.carbs;
    day.fats += food.fats;
  }

  useEffect(() => {
    setAllDays(getYearDates(2023));
  }, []);

  return (
    <DatesContext.Provider
      value={{
        weeks,
        currentWeek,
        selectedIndex,
        selectedDay,
        days,
        performAnimation,
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
