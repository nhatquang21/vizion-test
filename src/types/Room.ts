export interface Room {
  id: string;
  name: string;
  imgPath: string;
  hotspots: Hotspot[];
}

export interface Hotspot {
  id: string;
  name: string;
  position: [number, number, number];
  targetRoomId: string;
}
