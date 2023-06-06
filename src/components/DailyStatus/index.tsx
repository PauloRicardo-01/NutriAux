import { DailyNutrientsContainer, DailyStatusContainer } from "./styles";
import { UseProgress } from "../../hooks/UseProgress";

export function DailyStatus() {
  const { ProgressCircle, ProgressBar } = UseProgress();

  return (
    <DailyStatusContainer>
      <ProgressCircle
        progressTitle="1000 kcal"
        progressSubtitle="Meta: 6000 kcal"
        percent={82}
      />
      <DailyNutrientsContainer>
        <ProgressBar progressTitle="Proteina: 500" percent={65} />
        <ProgressBar progressTitle="Gordura: 500" percent={45} />
        <ProgressBar progressTitle="Carboidrato: 500" percent={55} />
      </DailyNutrientsContainer>
    </DailyStatusContainer>
  );
}
