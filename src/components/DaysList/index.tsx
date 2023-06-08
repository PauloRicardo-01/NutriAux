import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  ChangeWeekButton,
  ChangeWeekButtonText,
  DayText,
  DaysListButton,
  DaysListContainer,
  DaysListDays,
} from "./styles";
import { DatesContext } from "../../contexts/Dates";

export function DaysList() {
  const {
    currentWeek,
    selectedIndex,
    selectedDay,
    selectDay,
    getPreviousWeek,
    getNextWeek,
  } = useContext(DatesContext);
  const daysLetters: String[] = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <DaysListContainer>
      <ChangeWeekButton onPress={getPreviousWeek}>
        <ChangeWeekButtonText>&lt;</ChangeWeekButtonText>
      </ChangeWeekButton>
      <DaysListDays>
        {daysLetters.map((letter, i) => {
          return (
            <DaysListButton
              key={i}
              onPress={() =>
                currentWeek[i]?.getFullYear() !== 1899
                  ? selectDay(i, currentWeek[i]?.getDate())
                  : {}
              }
            >
              <DayText>{letter}</DayText>
              <DayText
                selected={
                  selectedIndex === i &&
                  selectedDay === currentWeek[i]?.getDate()
                }
              >
                {currentWeek[i]?.getFullYear() !== 1899
                  ? currentWeek[i]?.getDate()
                  : ""}
              </DayText>
            </DaysListButton>
          );
        })}
      </DaysListDays>
      <ChangeWeekButton onPress={getNextWeek}>
        <ChangeWeekButtonText>&gt;</ChangeWeekButtonText>
      </ChangeWeekButton>
    </DaysListContainer>
  );
}
