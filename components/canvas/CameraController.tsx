"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraController() {
    const { camera } = useThree();

    const targetPosition = useRef(
        new THREE.Vector3(0, 0, 7)
    );

    const lookAtTarget = useRef(
        new THREE.Vector3(0, 0, 0)
    );

    useFrame(() => {
        camera.position.lerp(targetPosition.current, 0.06);

        camera.lookAt(lookAtTarget.current);
    });

    return null;
}