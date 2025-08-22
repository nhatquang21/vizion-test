import EntranceImg from '@/assets/360images/1-Entrance.jpeg';
import WindowTable from '@/assets/360images/2-WindowTable.jpeg';
import WindowTable2 from '@/assets/360images/3-WindowTable2.jpeg';
import Corner from '@/assets/360images/4-Corner.jpeg';
import type { Room } from '../types/room';

export const roomData: Room[] = [
  {
    id: 'room1',
    name: 'Entrance',
    imgPath: EntranceImg,
    hotspots: [
      {
        id: 'hotspot1',
        name: 'Hotspot 1',
        position: [-20, -20, 20],
        targetRoomId: 'room2',
      },
    ],
  },
  {
    id: 'room2',
    name: 'Window table ',
    imgPath: WindowTable,
    hotspots: [
      {
        id: 'hotspot2',
        name: 'Hotspot 2',
        position: [-20, -20, 20],
        targetRoomId: 'room1',
      },
      {
        id: 'hotspot3',
        name: 'Hotspot 3',
        position: [15, 10, 20],
        targetRoomId: 'room3',
      },
    ],
  },
  {
    id: 'room3',
    name: 'Window table 2',
    imgPath: WindowTable2,
    hotspots: [
      {
        id: 'hotspot4',
        name: 'Hotspot 4',
        position: [1, 2, 3],
        targetRoomId: 'room2',
      },
      {
        id: 'hotspot5',
        name: 'Hotspot 5',
        position: [15, 10, 20],
        targetRoomId: 'room4',
      },
    ],
  },
  {
    id: 'room4',
    name: 'Corner',
    imgPath: Corner,
    hotspots: [
      {
        id: 'hotspot6',
        name: 'Hotspot 6',
        position: [1, 2, 3],
        targetRoomId: 'room3',
      },
    ],
  },
];
