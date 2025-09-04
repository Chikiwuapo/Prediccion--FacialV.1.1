import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ChatBotIconProps {
  isOpen: boolean;
  onClick: () => void;
}

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort = Math.sin(state.clock.elapsedTime * 0.8) * 0.2 + 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#4A90E2"
        attach="material"
        distort={0.1}
        speed={2}
        roughness={0.2}
        metalness={0.3}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
}

function Atmosphere() {
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.005;
      atmosphereRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.1);
    }
  });

  return (
    <Sphere ref={atmosphereRef} args={[1.15, 32, 32]} scale={2}>
      <MeshDistortMaterial
        color="#87CEEB"
        attach="material"
        distort={0.15}
        speed={0.8}
        transparent
        opacity={0.4}
        side={THREE.BackSide}
      />
    </Sphere>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const radius = 2.5 + Math.random() * 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.003;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.02}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[3, 0.08, 8, 100]} />
      <meshBasicMaterial
        color="#00ffff"
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function EnergyRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.03;
      ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.025;
      ring2Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.8, 0.05, 6, 100]} />
        <meshBasicMaterial
          color="#ff6b6b"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[3.2, 0.03, 6, 100]} />
        <meshBasicMaterial
          color="#4ecdc4"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

export const ChatBotIcon: React.FC<ChatBotIconProps> = ({ isOpen, onClick }) => {
  return (
    <div className='chatbot-icon-container' onClick={onClick}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#87CEEB" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.4}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
        />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#4A90E2" />
        
        <Environment preset="night" />
        <Stars radius={150} depth={80} count={3000} factor={6} saturation={0} fade />
        
        <ParticleField />
        <EnergyRings />
        <GlowRing />
        <Atmosphere />
        <Earth />
      </Canvas>
    </div>
  );
};
