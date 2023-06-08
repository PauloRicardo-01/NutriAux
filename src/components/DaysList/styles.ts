import styled from "styled-components/native";

export const DaysListContainer = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: ${(props: any) => props.theme.colors.primary};
`;

export const DaysListDays = styled.View`
  flex-direction: row;
  width: 80%;
  height: 100%;
`;

export const DaysListButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 14.28%;
  height: 100%;
  padding: 0;
`;

type DayProps = {
  selected: boolean;
};

export const DayText = styled.Text<DayProps>`
  width: 22px;
  height: 22px;
  padding-top: 1px;
  text-align: center;
  background-color: ${(props: any) =>
    props.selected ? props.theme.colors.background : "transparent"};
  border-radius: 50px;
`;

export const ChangeWeekButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;
  padding-bottom: 6px;
`;

export const ChangeWeekButtonText = styled.Text`
  font-size: 48px;
  font-weight: 100;
`;
