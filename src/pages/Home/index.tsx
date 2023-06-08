import { DailyMeals } from "../../components/DailyMeals";
import { DailyStatus } from "../../components/DailyStatus";
import { DaysList } from "../../components/DaysList";
import { Navigator } from "../../components/Navigator";

export function HomePage() {
  return (
    <>
      <DaysList />
      <DailyStatus />
      <DailyMeals />
      <Navigator />
    </>
  );
}
