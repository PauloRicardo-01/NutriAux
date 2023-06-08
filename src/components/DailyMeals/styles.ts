import styled from "styled-components/native";

export const DailyMealsContainer = styled.View`
  width: 100%;
`;

export const DailyMealsHeader = styled.View`
  justify-content: center;
  width: 100%;
  height: 30px;
  padding: 0 20px;
  background-color: ${(props: any) => props.theme.colors.primary};
`;

type DailyMealsListScrollProps = {
  height: string;
};

export const DailyMealsListScroll = styled.ScrollView<DailyMealsListScrollProps>`
  width: 100%;
  height: ${(props: any) => props.height};
  padding: 0 20px;
  gap: 10px;
`;
