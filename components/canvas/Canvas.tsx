"use client";

import { ReactNode, Suspense } from "react";
import { Canvas as R3FCanvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Scene } from "./Scene";

interface CanvasProps {
  children?: ReactNode;
}

export function Canvas({ children }: CanvasProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", border: "2px solid green" }}>
      <R3FCanvas
        shadows
        camera={{ position: [0, 0, 10], fov: 25 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene>{children}</Scene>
        </Suspense>
      </R3FCanvas>
      <Loader />
    </div>
  );
}
