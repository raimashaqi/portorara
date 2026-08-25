import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const Pupil = ({ x }) => {
  const ref = useRef();
  useFrame((state) => {
    // move slightly more outward so it doesn't clip
    ref.current.position.x = x + state.pointer.x * 0.09;
    ref.current.position.y = 0.32 + state.pointer.y * 0.07;
  });
  return (
    <mesh ref={ref} position={[x, 0.32, 0.98]}>
      <sphereGeometry args={[0.085, 16, 16]} />
      <meshStandardMaterial color="#1E1E24" roughness={0.2} />
    </mesh>
  );
};

const Bibo = () => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const g = group.current;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.55, 0.07);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.3, 0.07);
    g.position.y = Math.sin(state.clock.elapsedTime * 1.6) * 0.14;
    const s = THREE.MathUtils.lerp(g.scale.x, hovered ? 1.07 : 1, 0.1);
    g.scale.setScalar(s);
  });

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[2.2, 2.3, 1.5]} radius={0.45} smoothness={6}>
        <meshStandardMaterial color="#FF6B6B" roughness={0.35} />
      </RoundedBox>

      <RoundedBox args={[1.75, 1.35, 0.35]} radius={0.18} smoothness={6} position={[0, 0.25, 0.68]}>
        <meshStandardMaterial color="#FFFDE7" roughness={0.5} />
      </RoundedBox>

      <mesh position={[-0.42, 0.32, 0.8]}>
        <sphereGeometry args={[0.21, 24, 24]} />
        <meshStandardMaterial color="#ffffff" roughness={0.15} />
      </mesh>
      <mesh position={[0.42, 0.32, 0.8]}>
        <sphereGeometry args={[0.21, 24, 24]} />
        <meshStandardMaterial color="#ffffff" roughness={0.15} />
      </mesh>
      <Pupil x={-0.42} />
      <Pupil x={0.42} />

      <mesh position={[-0.72, 0.02, 0.78]} scale={[1, 0.6, 0.45]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#FF9EBB" />
      </mesh>
      <mesh position={[0.72, 0.02, 0.78]} scale={[1, 0.6, 0.45]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#FF9EBB" />
      </mesh>

      <mesh position={[0, 0.02, 0.85]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.15, 0.035, 12, 32, Math.PI]} />
        <meshStandardMaterial color="#1E1E24" />
      </mesh>

      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.5, 12]} />
        <meshStandardMaterial color="#1E1E24" />
      </mesh>
      <mesh position={[0, 1.68, 0]}>
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial color="#FFD93D" emissive="#FFD93D" emissiveIntensity={0.5} />
      </mesh>

      <mesh position={[-1.25, -0.1, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.16, 0.55, 8, 16]} />
        <meshStandardMaterial color="#FF8787" roughness={0.4} />
      </mesh>
      <mesh position={[1.25, -0.1, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.16, 0.55, 8, 16]} />
        <meshStandardMaterial color="#FF8787" roughness={0.4} />
      </mesh>

      <RoundedBox args={[0.5, 0.3, 0.6]} radius={0.12} position={[-0.5, -1.28, 0.1]}>
        <meshStandardMaterial color="#1E1E24" />
      </RoundedBox>
      <RoundedBox args={[0.5, 0.3, 0.6]} radius={0.12} position={[0.5, -1.28, 0.1]}>
        <meshStandardMaterial color="#1E1E24" />
      </RoundedBox>
    </group>
  );
};

const FloatShape = ({ position, color, shape }) => (
  <Float speed={2.5} rotationIntensity={1.4} floatIntensity={1.8}>
    <mesh position={position}>
      {shape === "torus" ? (
        <torusGeometry args={[0.32, 0.13, 16, 32]} />
      ) : shape === "octa" ? (
        <octahedronGeometry args={[0.32, 0]} />
      ) : (
        <icosahedronGeometry args={[0.3, 0]} />
      )}
      <meshStandardMaterial color={color} roughness={0.3} />
    </mesh>
  </Float>
);

const Mascot3D = () => (
  <div data-testid="mascot-3d" className="w-full h-full">
    <Canvas camera={{ position: [0, 0.4, 6.5], fov: 42 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-5, 2, -4]} intensity={0.5} color="#C7B9FF" />
      <Suspense fallback={null}>
        <Bibo />
        <FloatShape position={[-2.6, 1.2, -1]} color="#4ECDC4" shape="torus" />
        <FloatShape position={[2.7, 0.9, -0.8]} color="#FFD93D" shape="ico" />
        <FloatShape position={[2.4, -1.5, -0.6]} color="#C7B9FF" shape="octa" />
        <FloatShape position={[-2.5, -1.4, -0.9]} color="#FFB3C7" shape="ico" />
        <Sparkles count={45} scale={[8, 6, 4]} size={3.5} speed={0.4} color="#FFD93D" />
      </Suspense>
      <ContactShadows position={[0, -1.85, 0]} opacity={0.25} scale={9} blur={2.6} far={3} color="#1E1E24" />
    </Canvas>
  </div>
);

export default Mascot3D;
