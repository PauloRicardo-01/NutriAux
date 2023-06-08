import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./themes";
import { StyledSafeArea } from "./styles";
import { DatesProvider } from "./src/contexts/Dates";
import { HomePage } from "./src/pages/Home";
// import { DaysProvider } from "./src/contexts/Days";

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <DatesProvider>
          <StatusBar />
          <StyledSafeArea>
            <HomePage />
          </StyledSafeArea>
        </DatesProvider>
      </ThemeProvider>
    </>
  );
}
