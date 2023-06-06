import styled from "styled-components/native";
import { Svg, Circle, Rect } from "react-native-svg";

// *** Progress Circle ***
export const ProgressCircleContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CircleSvg = styled(Svg)`
  position: relative;
  width: 130px;
  height: 130px;
`;

type ProgressCircleProps = {
  offset: string;
  stroke?: string;
};

export const ProgressSvgCircle = styled(Circle)<ProgressCircleProps>`
  width: 140px;
  height: 140px;
  fill: none;
  stroke-width: 10px;
  stroke: ${(props: any) => props.stroke ?? props.theme.colors.primary};
  translate: 5px;
  stroke-dasharray: 377px;
  stroke-dashoffset: ${(props: any) => props.offset};
`;

export const ProgressTextContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ProgressTextTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const ProgressTextSubtitle = styled.Text`
  font-size: 12px;
`;

// *** Progress Bar ***
type ProgressBarContainerProps = {
  width?: string;
  height?: string;
};

export const ProgressBarContainer = styled.View<ProgressBarContainerProps>`
  width: ${(props: any) => props.width ?? "100%"};
  gap: 3px;
`;

export const ProgressBarTitle = styled.Text`
  width: 100%;
  color: ${(props: any) => props.theme.colors.text};
`;

type ProgressBarBackProps = {
  height?: string;
};

export const ProgressBarBack = styled.View<ProgressBarBackProps>`
  width: 100%;
  height: ${(props: any) => props.height ?? "6px"};
  /* background-color: #f3f3f3; */
  border-radius: 10px;
  /* overflow: hidden; */
`;

type ProgressBarFrontProps = {
  percent: string;
};

export const ProgressBarFront = styled.View<ProgressBarFrontProps>`
  width: ${(props: any) => props.percent};
  height: 100%;
  background-color: ${(props: any) => props.theme.colors.primary};
  border-radius: 10px;
`;
