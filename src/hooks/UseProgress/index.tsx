import {
  CircleSvg,
  ProgressBarBack,
  ProgressBarContainer,
  ProgressBarFront,
  ProgressBarTitle,
  ProgressCircleContainer,
  ProgressSvgCircle,
  ProgressTextContainer,
  ProgressTextSubtitle,
  ProgressTextTitle,
} from "./styles";

type ProgressCircleProps = {
  progressTitle?: string;
  progressSubtitle?: string;
  percent: number;
};

type ProgressBarProps = {
  progressTitle?: string;
  percent: number;
};

export function UseProgress() {
  const ProgressCircle = ({
    progressTitle,
    progressSubtitle,
    percent,
  }: ProgressCircleProps) => {
    const offset = Math.ceil(377 - percent * 3.77);

    return (
      <ProgressCircleContainer>
        <CircleSvg>
          <ProgressSvgCircle
            cx="60"
            cy="60"
            r="60"
            offset={`${offset}px`}
          ></ProgressSvgCircle>
        </CircleSvg>
        <ProgressTextContainer>
          <ProgressTextTitle>{progressTitle}</ProgressTextTitle>
          <ProgressTextSubtitle>{progressSubtitle}</ProgressTextSubtitle>
        </ProgressTextContainer>
      </ProgressCircleContainer>
    );
  };

  const ProgressBar = ({ progressTitle, percent }: ProgressBarProps) => {
    return (
      <ProgressBarContainer>
        <ProgressBarTitle>{progressTitle}</ProgressBarTitle>
        <ProgressBarBack>
          <ProgressBarFront percent={`${percent}%`} />
        </ProgressBarBack>
      </ProgressBarContainer>
    );
  };

  return { ProgressCircle, ProgressBar };
}
