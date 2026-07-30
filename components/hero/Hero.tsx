import HeroLayout from "./HeroLayout";
import { HeroProvider } from "@/context/HeroContext";

export default function Hero() {
    return (
        <HeroProvider>
            <HeroLayout />
        </HeroProvider>
    );
}