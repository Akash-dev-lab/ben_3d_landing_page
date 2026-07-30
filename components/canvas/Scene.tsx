"use client"

import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import { Lights } from "./Lights";
import { Environment } from "./Environment";
import Stage from "./Stage";
import CanvasLoader from "./CanvasLoader";
import { useSceneCleanup } from "@/hooks/useSceneCleanup";

type SceneProps = {
  children?: React.ReactNode;
};

export default function Scene({
  children,
}: SceneProps) {
  useSceneCleanup();

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