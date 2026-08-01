import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import MahabaliModel from "./MahabaliModel";

export default function MahabaliViewer() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <MahabaliModel />

        <Environment preset="sunset" />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
