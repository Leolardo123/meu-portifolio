import { ComponentType, SVGProps } from "react";

export interface IconComponentProps {
    width: number;
    height: number;
    alt?: string;
}

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;