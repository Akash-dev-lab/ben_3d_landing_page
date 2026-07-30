"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const MODELS = [
    "diamondhead",
    "heatblast",
    "ghostfreak",
    "xlr8",
    "fourarms",
];

export default function PreloadAssets() {
    useEffect(() => {
        MODELS.forEach((slug) => {
            useGLTF.preload(`/models/draco/${slug}.glb`);
        });
    }, []);

    return null;
}