"use client";

import { useEffect } from "react";

export function useSceneCleanup() {
    useEffect(() => {
        return () => {
            // Future:
            // dispose geometries
            // dispose materials
            // clear gsap timelines
            // remove listeners
        };
    }, []);
}