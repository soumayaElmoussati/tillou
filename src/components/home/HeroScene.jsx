
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";

function FloatingLeaves() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.12;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={group}>
      {[0, 1, 2, 3, 4].map((item) => {
        const angle = (item / 5) * Math.PI * 2;

        return (
          <mesh
            key={item}
            position={[
              Math.cos(angle) * 1.25,
              Math.sin(angle) * 0.8,
              Math.sin(angle) * 0.5,
            ]}
            rotation={[0.3, 0, angle]}
            scale={[0.45, 0.12, 0.06]}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={item % 2 === 0 ? "#5B8C55" : "#174735"}
              roughness={0.38}
              metalness={0.08}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function FruitObject() {
  const fruit = useRef();

  useFrame((state) => {
    if (!fruit.current) return;

    fruit.current.rotation.y =
      state.clock.elapsedTime * 0.22;

    fruit.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <group ref={fruit}>
      <mesh scale={[0.85, 1.05, 0.85]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#E9B83F"
          roughness={0.24}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>

      <mesh position={[0, 1.02, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.035, 0.06, 0.3, 16]} />
        <meshStandardMaterial color="#5B4930" />
      </mesh>
    </group>
  );
}

function OrbitalRing() {
  const ring = useRef();

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * 0.18;
  });

  return (
    <mesh
      ref={ring}
      rotation={[1.1, 0.3, -0.4]}
      scale={[1.55, 1, 1]}
    >
      <torusGeometry args={[1.45, 0.012, 16, 120]} />
      <meshBasicMaterial color="#E9B83F" />
    </mesh>
  );
}

function SceneContent() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const targetX = state.pointer.x * 0.12;
    const targetY = state.pointer.y * 0.08;

    group.current.rotation.y +=
      (targetX - group.current.rotation.y) * 0.025;

    group.current.rotation.x +=
      (targetY - group.current.rotation.x) * 0.025;
  });

  return (
    <group ref={group}>
      <Float
        speed={1.5}
        rotationIntensity={0.18}
        floatIntensity={0.3}
      >
        <FruitObject />
        <FloatingLeaves />
        <OrbitalRing />
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-3d-scene">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.3} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2.5}
          color="#FFF4D8"
        />

        <pointLight
          position={[-3, 2, 2]}
          intensity={2}
          color="#5B8C55"
        />

        <SceneContent />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
