import React, { useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import carmodel from "../assets/Models/car-model.glb"




const Model = () => {
  const gltf = useLoader(GLTFLoader, carmodel);
  const meshRef = useRef();

  useEffect(() => {
    if (gltf.scene && meshRef.current) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = new THREE.Vector3();
      box.getSize(size);

      const maxDimension = Math.max(size.x, size.y, size.z);
      const desiredSize = 10;
      const scale = desiredSize / maxDimension;

      meshRef.current.scale.set(scale, scale, scale);

      const center = new THREE.Vector3();
      box.getCenter(center);
      meshRef.current.position.set(
        -center.x * scale,
        -center.y * scale,
        -center.z * scale
      );

      //  REMOVE top-down rotation
      // meshRef.current.rotation.x = Math.PI / 2;

      // Optional: add slight Y rotation if needed
      meshRef.current.rotation.y = Math.PI / 4;
    }
  }, [gltf]);
  

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });
  

  return <primitive ref={meshRef} object={gltf.scene.clone()} />;
};

const ModelViewer = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "40vw", background: "transparent" }}
      camera={{ position: [0, 0, 10] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={true} />

      <Model />
    </Canvas>
  );
};
  

export default ModelViewer;
