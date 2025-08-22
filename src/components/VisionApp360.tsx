import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { roomData } from '../mockData/data';
import { useCallback, useRef, useState } from 'react';
import { Room360 } from './Room360';
import './VisionApp360.css';
import { Logo } from './Logo';

export default function Vision360App() {
  const [currentRoomId, setCurrentRoomId] = useState<string>('room1');
  const controlsRef = useRef<any>(null);
  const currentRoom =
    roomData.find(room => room.id === currentRoomId) || roomData[0];

  const handleRoomChange = useCallback((roomId: string) => {
    setCurrentRoomId(roomId);

    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  }, []);

  return (
    <div className="vision-360-app">
      <Logo />
      <div className="canvas-container">
        <Canvas
          camera={{
            fov: 90,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5],
          }}
        >
          <Room360 room={currentRoom} handleRoomChange={handleRoomChange} />
          <OrbitControls ref={controlsRef} />
        </Canvas>
      </div>
    </div>
  );
}
