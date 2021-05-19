export const externalEndpoint =
  process.env.REACT_APP_ENDPOINT || "http://server:8000/";

export interface junctionType {
  id?: string;
  name: string;
  lat: number;
  lng: number;
  camera: Array<number>;
  intersectionType: string;
  orientation: orientations;
  light: { [key: number]: light };
}

export interface light {
  north?: number;
  northRight?: number;
  northLeft?: number;
  northU?: number;
  east?: number;
  eastRight?: number;
  eastLeft?: number;
  eastU?: number;
  south?: number;
  southRight?: number;
  southLeft?: number;
  southU?: number;
  west?: number;
  westRight?: number;
  westLeft?: number;
  westU?: number;
}

export type orientations = "north" | "east" | "south" | "west" | undefined;
