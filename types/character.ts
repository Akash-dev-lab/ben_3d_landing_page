export type Vector3Tuple = [number, number, number];

export interface CharacterConfig {
  id: string;
  name: string;
  model: string;
  silhouette: string;
  scale: number;
  position: Vector3Tuple;
  rotation: Vector3Tuple;
}

export interface CharacterProps {
  slug: string;
  useSilhouette?: boolean;
}

export interface CharacterModelProps {
  config: CharacterConfig;
  useSilhouette: boolean;
}