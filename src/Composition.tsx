import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { HelloWorld } from "./HelloWorld";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const backgroundOpacity = interpolate(
    frame,
    [0, 30, 120, 150],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "#0f0f23",
          opacity: backgroundOpacity,
        }}
      />
      <Sequence from={0} durationInFrames={150}>
        <HelloWorld titleText="Welcome to Remotion!" titleColor="#f64f59" />
      </Sequence>
    </AbsoluteFill>
  );
};
