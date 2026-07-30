"use client";

import { Character } from "./Character";
import { useHero } from "@/hooks/useHero";

export default function CharacterManager() {
    const { currentAlien } = useHero();

    return (
        <group name="CharacterManager">
            <Character slug={currentAlien} />
        </group>
    );
}