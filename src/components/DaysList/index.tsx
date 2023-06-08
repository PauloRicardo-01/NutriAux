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
        {daysLetters.map((letter, index) => {
          return (
            <DaysListButton
              key={index}
              onPress={() => {
                currentWeek[index]?.substring(6, 10) !== "0001" &&
                currentWeek[index] !== ""
                  ? selectDay(index, currentWeek[index])
                  : {};
              }}
            >
              <DayText>{letter}</DayText>
              <DayText
                selected={
                  selectedIndex === index && selectedDay === currentWeek[index]
                }
              >
                {currentWeek[index]?.substring(6, 10) !== "0001"
                  ? currentWeek[index]
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
