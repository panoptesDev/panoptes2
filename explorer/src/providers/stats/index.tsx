import React from "react";
import { PanoptesBeachProvider } from "./solanaBeach";

type Props = { children: React.ReactNode };
export function StatsProvider({ children }: Props) {
  return <PanoptesBeachProvider>{children}</PanoptesBeachProvider>;
}
