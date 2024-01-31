import React from "react";
import Blocks from "../effects/Blocks/Blocks";
import Canvas from "../Canvas/Canvas";

type Props = {};

const Scene = (props: Props) => {
  return (
    <Canvas>
      <Blocks />
    </Canvas>
  );
};

export default Scene;
