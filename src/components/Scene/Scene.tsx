import React, { PropsWithChildren } from "react";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { OrbitControls, Preload, Stats } from "@react-three/drei";

type Props = CanvasProps & {};

const Scene = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Canvas {...props}>
      <Stats />
      <OrbitControls />
      <Preload all />
      {children}
    </Canvas>
  );
};

export default Scene;
