"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    ReactNode,
} from "react";

type HeroContextType = {
    currentAlien: string;
    setCurrentAlien: (slug: string) => void;
};

const HeroContext = createContext<HeroContextType | null>(null);

type HeroProviderProps = {
    children: ReactNode;
};

export function HeroProvider({
    children,
}: HeroProviderProps) {
    const [currentAlien, setCurrentAlien] =
        useState("diamondhead");

    const value = useMemo(
        () => ({
            currentAlien,
            setCurrentAlien,
        }),
        [currentAlien]
    );

    return (
        <HeroContext.Provider value={value}>
            {children}
        </HeroContext.Provider>
    );
}

export function useHeroContext() {
    const context = useContext(HeroContext);

    if (!context) {
        throw new Error(
            "useHeroContext must be used inside HeroProvider."
        );
    }

    return context;
}