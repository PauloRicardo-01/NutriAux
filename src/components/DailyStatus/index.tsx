import { DailyNutrientsContainer, DailyStatusContainer } from "./styles";
import { UseProgress } from "../../hooks/UseProgress";
import { DatesContext } from "../../contexts/Dates";
import { useContext } from "react";

export function DailyStatus() {
  const { days, selectedDay, performAnimation } = useContext(DatesContext);
  const { ProgressCircle, ProgressBar } = UseProgress();

  const currDay = days.get(selectedDay);

  return (
    <DailyStatusContainer>
      <ProgressCircle
        progressTitle={`${currDay?.totalCalories.toString()} kcal` || "0 kcal"}
        progressSubtitle={`Meta: ${currDay?.caloriesGoal} kcal` || "0 kcal"}
        percent={
          (currDay != null &&
            (currDay?.totalCalories / currDay?.caloriesGoal) * 100) ||
          0
        }
        performAnimation={performAnimation}
      />
      <DailyNutrientsContainer>
        <ProgressBar
          progressTitle={`Proteina: ${currDay?.proteins.toString()}g / ${currDay?.proteinsGoal.toString()}g`}
          percent={
            ((currDay?.proteins || 0) / (currDay?.proteinsGoal || 0)) * 100
          }
          performAnimation={performAnimation}
        />
        <ProgressBar
          progressTitle={`Gordura: ${currDay?.fats.toString()}g / ${currDay?.fatsGoal.toString()}g`}
          percent={((currDay?.fats || 0) / (currDay?.fatsGoal || 0)) * 100}
          performAnimation={performAnimation}
        />
        <ProgressBar
          progressTitle={`Carboidrato: ${currDay?.carbs.toString()}g / ${currDay?.carbsGoal.toString()}g`}
          percent={((currDay?.carbs || 0) / (currDay?.carbsGoal || 0)) * 100}
          performAnimation={performAnimation}
        />
      </DailyNutrientsContainer>
    </DailyStatusContainer>
  );
}
