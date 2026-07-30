// components/canvas/CanvasErrorFallback.tsx
"use client";

import { FallbackProps } from "react-error-boundary";

export default function CanvasErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    console.error(error);

    return (
        <div className="flex flex-col h-full items-center justify-center text-white gap-3 p-4">
            <p>Failed to load 3D scene: {error instanceof Error ? error.message : "Unknown error"}</p>
            <button
                onClick={resetErrorBoundary}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
            >
                Try Again
            </button>
        </div>
    );
}
