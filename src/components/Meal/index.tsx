import { Text } from "react-native";
import {
  MealContainer,
  MealFood,
  MealFoodData,
  MealFoodName,
  MealFoods,
} from "./styles";
import { MealType } from "../../types";

type MealProps = {
  meal: MealType;
};

export function Meal({ meal }: MealProps) {
  return (
    <MealContainer>
      <Text>{meal.name}</Text>
      <MealFoods>
        {meal.foods.map((food, index) => {
          return (
            <MealFood key={index}>
              <MealFoodName>{food.name}</MealFoodName>
              <MealFoodData>
                <Text>Calorias</Text>
              </MealFoodData>
            </MealFood>
          );
        })}
      </MealFoods>
    </MealContainer>
  );
}
