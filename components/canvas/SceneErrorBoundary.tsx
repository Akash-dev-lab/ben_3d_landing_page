"use client";

import { ErrorBoundary } from "react-error-boundary";
import CanvasErrorFallback from "./CanvasErrorFallback";

type Props = {
    children: React.ReactNode;
};

export default function SceneErrorBoundary({
    children,
}: Props) {
    return (
        <ErrorBoundary
            FallbackComponent={CanvasErrorFallback}
        >
            {children}
        </ErrorBoundary>
    );
}