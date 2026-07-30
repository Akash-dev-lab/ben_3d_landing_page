import { useHeroContext } from "@/context/HeroContext";

export function useHero() {
    return useHeroContext();
}