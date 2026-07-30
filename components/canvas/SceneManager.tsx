"use client";

import Stage from "./Stage";
import CharacterManager from "./CharacterManager";

export default function SceneManager() {
    return (
        <Stage>
            <CharacterManager />
        </Stage>
    );
}