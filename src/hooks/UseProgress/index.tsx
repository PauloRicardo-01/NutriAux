import { Animated, LayoutAnimation } from "react-native";
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
import { useEffect, useState } from "react";

type ProgressCircleProps = {
  progressTitle?: string;
  progressSubtitle?: string;
  percent: number;
  performAnimation: boolean;
};

type ProgressBarProps = {
  progressTitle?: string;
  percent: number;
  performAnimation: boolean;
};

export function UseProgress() {
  const ProgressCircle = ({
    progressTitle,
    progressSubtitle,
    percent,
    performAnimation,
  }: ProgressCircleProps) => {
    const offset = Math.ceil(377 - percent * 3.77);
    const AnimatedCircle = Animated.createAnimatedComponent(ProgressSvgCircle);
    const animatedValue = new Animated.Value(0);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    const animatedStrokeDashoffset = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [377, offset],
    });

    return (
      <ProgressCircleContainer>
        <CircleSvg>
          <AnimatedCircle
            cx="60"
            cy="60"
            r="60"
            // offset={`${offset}px`}
            strokeDashoffset={
              performAnimation ? animatedStrokeDashoffset : offset
            }
          ></AnimatedCircle>
        </CircleSvg>
        <ProgressTextContainer>
          <ProgressTextTitle>{progressTitle}</ProgressTextTitle>
          <ProgressTextSubtitle>{progressSubtitle}</ProgressTextSubtitle>
        </ProgressTextContainer>
      </ProgressCircleContainer>
    );
  };

  const ProgressBar = ({
    progressTitle,
    percent,
    performAnimation,
  }: ProgressBarProps) => {
    const [width, setWidth] = useState(10);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (width < percent) {
          setWidth(width + 10 > percent ? percent : width + 10);
        }
      }, 10);

      return () => {
        clearTimeout(timer);
      };
    }, [width]);

    useEffect(() => {
      if (width >= percent) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
    }, [width]);

    return (
      <ProgressBarContainer>
        <ProgressBarTitle>{progressTitle}</ProgressBarTitle>
        <ProgressBarBack>
          <ProgressBarFront percent={width} />
        </ProgressBarBack>
      </ProgressBarContainer>
    );
  };

  return { ProgressCircle, ProgressBar };
}
