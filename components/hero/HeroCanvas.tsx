import { Canvas } from "@/components/canvas/Canvas";
import { Character } from "@/components/canvas/Character";

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative h-[80vh] w-225 max-w-full">
                <Canvas>
                    <Character slug="diamondhead" />
                </Canvas>
            </div>
        </div>
    );
}