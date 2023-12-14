"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";

import { pointsOuter } from "./utils";
const SubPageBacground = () => {
  return (
    <div>
      <Canvas
        camera={{
          position: [0, -65.5, 15],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls
          maxDistance={60}
          minDistance={60}
          enableRotate={false}
          enableZoom={false}
        />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={25.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  return (
    <>
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

export default SubPageBacground;
