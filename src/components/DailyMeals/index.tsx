import { Text } from "react-native";
import { Dimensions } from "react-native";
import {
  DailyMealsContainer,
  DailyMealsHeader,
  DailyMealsListScroll,
} from "./styles";
import { Meal } from "../Meal";
import { MealType } from "../../types";
import { useContext } from "react";
import { DatesContext } from "../../contexts/Dates";

export function DailyMeals() {
  const { days, selectedDay } = useContext(DatesContext);
  const { height } = Dimensions.get("window");
  const listHeight = height - 384;

  return (
    <DailyMealsContainer>
      <DailyMealsHeader>
        <Text>Refeições</Text>
      </DailyMealsHeader>
      <DailyMealsListScroll height={`${listHeight}px`}>
        {days.get(selectedDay)?.meals.map((meal, index) => {
          return <Meal key={index} meal={meal} />;
        })}
      </DailyMealsListScroll>
    </DailyMealsContainer>
  );
}
