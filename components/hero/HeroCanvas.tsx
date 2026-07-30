import { Canvas } from "@/components/canvas/Canvas";
import CharacterManager from "@/components/canvas/CharacterManager";
import CameraController from "@/components/canvas/CameraController";
import SceneErrorBoundary from "../canvas/SceneErrorBoundary";
import AssetManager from "../canvas/AssetManager";
import Scene from "../canvas/Scene";

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative h-[80vh] w-225 max-w-full">
                <Canvas>
                    <SceneErrorBoundary>
                        <AssetManager />
                        <CameraController />
                        <CharacterManager />
                        <Scene />
                    </SceneErrorBoundary>
                </Canvas>
            </div>
        </div>
    );
}