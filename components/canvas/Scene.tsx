"use client";

import React, { ReactNode } from "react";
import { OrbitControls } from "@react-three/drei";
import { Lights } from "./Lights";
import { Environment } from "./Environment";

interface SceneProps {
  children?: ReactNode;
}

export function Scene({ children }: SceneProps) {
  return (
    <>
      <Lights />
      <Environment />
      <OrbitControls makeDefault />
      {children}
    </>
  );
}

