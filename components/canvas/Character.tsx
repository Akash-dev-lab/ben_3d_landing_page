"use client";

import { useGLTF } from "@react-three/drei";
import { characters } from "@/config/characters";
import { CharacterConfig, CharacterProps, CharacterModelProps } from "@/types/character";


function CharacterModel({ config, useSilhouette }: CharacterModelProps) {
  const modelPath = useSilhouette ? config.silhouette : config.model;
  const { scene } = useGLTF(modelPath, true);

  return (
    <primitive
      object={scene}
      scale={config.scale}
      position={config.position}
      rotation={config.rotation}
      dispose={null}
    />
  );
}

export function Character({ slug, useSilhouette = false }: CharacterProps) {
  const characterConfig: CharacterConfig | undefined = characters.find(
    (c) => c.id === slug
  );

  if (!characterConfig) {
    console.warn(`Character with slug "${slug}" not found in characters config.`);
    return null;
  }

  return <CharacterModel config={characterConfig} useSilhouette={useSilhouette} />;
}

// Preload all character models & silhouettes into useGLTF cache
characters.forEach((char) => {
  if (char.model) {
    useGLTF.preload(char.model, true);
  }
  if (char.silhouette) {
    useGLTF.preload(char.silhouette, true);
  }
});
