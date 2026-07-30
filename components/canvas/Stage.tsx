import { ReactNode } from "react";

type StageProps = {
    children: ReactNode;
};

export default function Stage({ children }: StageProps) {
    return (
        <group name="Stage">
            {children}
        </group>
    );
}