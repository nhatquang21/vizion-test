import { useLoader } from '@react-three/fiber';
import { memo, useRef } from 'react';
import * as THREE from 'three';
import type { Room } from '../types/room';
import { Hotspots } from './Hotspots';

interface Room360Props {
  room: Room;
  handleRoomChange: (roomId: string) => void;
}

export const Room360 = memo(({ room, handleRoomChange }: Room360Props) => {
  const texture = useLoader(THREE.TextureLoader, room.imgPath);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <ambientLight intensity={2} />

      <mesh ref={meshRef}>
        <sphereGeometry args={[50, 32, 32]} />{' '}
        <meshStandardMaterial map={texture} side={THREE.BackSide} />
      </mesh>

      <Hotspots room={room} handleRoomChange={handleRoomChange} />
    </>
  );
});
