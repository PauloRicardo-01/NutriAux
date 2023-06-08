import styled from "styled-components/native";

export const MealContainer = styled.View`
  width: 100%;
  margin-top: 8px;
`;

export const MealFoods = styled.View`
  width: 100%;
  gap: 6px;
`;

export const MealFood = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  padding: 0 10px;
  background-color: ${(props: any) => props.theme.colors.primary};
  border-radius: 6px;
`;

export const MealFoodName = styled.Text`
  color: ${(props: any) => props.theme.colors.text};
`;

export const MealFoodData = styled.View`
  justify-content: flex-end;
`;
