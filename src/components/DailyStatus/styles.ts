import styled from "styled-components/native";

export const DailyStatusContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  height: 164px;
  margin: 20px 0;
  padding: 10px 20px;
  background-color: ${(props: any) => props.theme.colors.background};
  border-radius: 20px;
`;

export const DailyText = styled.Text`
  color: ${(props: any) => props.theme.colors.text};
`;

export const DailyNutrientsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  gap: 10px;
  padding: 0 10px 16px 20px;
`;
