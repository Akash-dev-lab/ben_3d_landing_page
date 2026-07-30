"use client"

import { OrbitControls } from "@react-three/drei";

import { Lights } from "./Lights";
import { Environment } from "./Environment";
import Stage from "./Stage";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

type SceneProps = {
  children?: React.ReactNode;
};

export default function Scene({
  children,
}: SceneProps) {
  return (
    <>
      <Lights />

      <Environment />

      <OrbitControls />

      <Stage>
        <Suspense fallback={<CanvasLoader />}>
          {children}
        </Suspense>
      </Stage>
    </>
  );
}