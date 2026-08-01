import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";
import MahabaliModel from "./MahabaliModel";


function Loader() {
  return (
    <Html center>
      <div className="text-amber-600 font-semibold text-lg">
        Loading Mahabali...
      </div>
    </Html>
  );
}


export default function MahabaliViewer() {
  return (
    <div className="w-full h-[450px] md:h-[600px]">

      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        dpr={[1, 1.5]}
        shadows={false}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >

        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />


        <Suspense fallback={<Loader />}>

          <MahabaliModel />

          <Environment preset="sunset" />

        </Suspense>


        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
        />

      </Canvas>

    </div>
  );
}