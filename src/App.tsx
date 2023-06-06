import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Platform,
} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledSafeArea } from "./styles";
import { DailyStatus } from "./components/DailyStatus";

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <StatusBar />
        <StyledSafeArea>
          <DailyStatus />
        </StyledSafeArea>
      </ThemeProvider>
    </>
  );
}
