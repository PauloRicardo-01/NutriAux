import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./themes";
import { StyledSafeArea } from "./styles";
import { DailyStatus } from "./src/components/DailyStatus";
import { DaysList } from "./src/components/DaysList";
import { DatesProvider } from "./src/contexts/Dates";

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <DatesProvider>
          <StatusBar />
          <StyledSafeArea>
            <DaysList />
            <DailyStatus />
          </StyledSafeArea>
        </DatesProvider>
      </ThemeProvider>
    </>
  );
}
