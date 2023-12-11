"use client";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { pointsInner, pointsOuter } from "./utils";
const ParticleRing = () => {
  const groupRef = useRef();
  const options = {
    damping: 40,
  };
  const rotationX = useSpring(useMotionValue(0), options);
  const rotationY = useSpring(useMotionValue(0), options);
  const rotationZ = useSpring(0.02, options);
  const handleMouseMove = (e) => {
    const mouseY = e.clientY / window.innerHeight; // Normalizacja pozycji kursora
    const mouseX = e.clientX / window.innerWidth;
    rotationX.set((mouseY - 0.5) * Math.PI * 0.02);
    rotationY.set((mouseX - 0.5) * Math.PI * 0.05);
  };

  useEffect(() => {
    // Dodaj obsługę zdarzenia ruchu myszy
    window.addEventListener("mousemove", handleMouseMove);

    // Usuń nasłuchiwanie zdarzenia po odmontowaniu komponentu
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Canvas
        camera={{
          position: [0, -45.5, 15],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls
          maxDistance={30}
          minDistance={30}
          enableRotate={false}
          enableZoom={false}
        />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={25.0} />
        <PointCircle
          groupRef={groupRef}
          rotationX={rotationX}
          rotationY={rotationY}
          rotationZ={rotationZ}
        />
      </Canvas>
    </div>
  );
};

const PointCircle = ({ groupRef, rotationX, rotationY }) => {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = rotationX.get();
      groupRef.current.rotation.y = rotationY.get();
    }
    if (groupRef.current?.rotation) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {pointsInner.map((point) => (
          <mesh key={point.idx}>
            <Point color={point.color} position={point.position} />
          </mesh>
        ))}
      </group>
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </>
  );
};

const Point = ({ position, color }) => {
  return (
    <Float>
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={0.5}
          roughness={10.5}
          color={color}
        />
      </Sphere>
    </Float>
  );
};

export default ParticleRing;
