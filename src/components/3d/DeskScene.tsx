"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles, Box, Cylinder, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function Desk() {
  return (
    <group position={[0, -1, 0]}>
      {/* Desk Surface */}
      <Box args={[4, 0.2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2d2d2d" roughness={0.7} metalness={0.2} />
      </Box>
      {/* Desk Legs */}
      {[[-1.8, -0.8], [1.8, -0.8], [-1.8, 0.8], [1.8, 0.8]].map(([x, z], i) => (
        <Box key={i} args={[0.15, 2, 0.15]} position={[x, -1.1, z]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      ))}

      {/* Monitor Stand */}
      <Box args={[0.5, 0.08, 0.5]} position={[0, 0.14, -0.4]}>
        <meshStandardMaterial color="#111111" />
      </Box>
      <Box args={[0.08, 0.5, 0.08]} position={[0, 0.4, -0.5]}>
        <meshStandardMaterial color="#111111" />
      </Box>

      {/* Monitor */}
      <group position={[0, 1.05, -0.4]}>
        <RoundedBox args={[2.4, 1.4, 0.08]} radius={0.04} smoothness={2}>
          <meshStandardMaterial color="#0a0a0a" roughness={0.5} />
        </RoundedBox>
        {/* Screen glow */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[2.2, 1.2]} />
          <meshBasicMaterial color="#00e8a2" toneMapped={false} transparent opacity={0.7} />
        </mesh>
        <ScreenContent />
      </group>

      {/* Keyboard */}
      <RoundedBox args={[1.2, 0.04, 0.4]} position={[0, 0.12, 0.4]} radius={0.02} smoothness={2} rotation={[0.05, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </RoundedBox>

      {/* Mouse */}
      <RoundedBox args={[0.18, 0.06, 0.28]} position={[0.9, 0.13, 0.4]} radius={0.03} smoothness={2}>
        <meshStandardMaterial color="#111111" />
      </RoundedBox>

      {/* Coffee Mug */}
      <group position={[-1.2, 0.3, 0.3]}>
        <Cylinder args={[0.12, 0.12, 0.35, 12]}>
          <meshStandardMaterial color="#f4f4f5" roughness={0.3} />
        </Cylinder>
      </group>
    </group>
  );
}

function ScreenContent() {
  const codeGroup = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (codeGroup.current) {
      codeGroup.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.015;
    }
  });

  return (
    <group ref={codeGroup} position={[0, 0, 0.06]}>
      {[
        { w: 1.4, y: 0.35, x: -0.3, color: "#000000" },
        { w: 1.0, y: 0.25, x: -0.5, color: "#000000" },
        { w: 1.6, y: 0.15, x: -0.2, color: "#000000" },
        { w: 0.7, y: 0.05, x: -0.65, color: "#00e8a2" },
      ].map((line, i) => (
        <mesh key={i} position={[line.x, line.y, 0]}>
          <planeGeometry args={[line.w, 0.03]} />
          <meshBasicMaterial color={line.color} transparent opacity={line.color === "#00e8a2" ? 1 : 0.5} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

export default function DeskScene() {
  return (
    <Canvas
      camera={{ position: [4, 3, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
      flat
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      
      <Float
        speed={1.5}
        rotationIntensity={0.15}
        floatIntensity={0.3}
      >
        <Desk />
      </Float>

      <Sparkles count={30} scale={5} size={1.5} speed={0.3} opacity={0.15} color="#00e8a2" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 4}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
