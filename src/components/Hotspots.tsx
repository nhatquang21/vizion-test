import { memo } from 'react';
import type { Room } from '../types/room';
import { Html } from '@react-three/drei';
import footStep from '@/assets/footstep.png';

interface HotspotsProps {
  room: Room;
  handleRoomChange: (roomId: string) => void;
}

export const Hotspots: React.FC<HotspotsProps> = memo(
  ({ room, handleRoomChange }) => {
    return (
      <>
        {room.hotspots.map(hotspot => (
          <Html key={hotspot.id} position={hotspot.position} transform occlude>
            <div
              className="hotspot-simple"
              onClick={() => handleRoomChange(hotspot.targetRoomId)}
            >
              <img className="footstep-img" src={footStep} alt="Footstep" />
            </div>
          </Html>
        ))}
      </>
    );
  }
);
