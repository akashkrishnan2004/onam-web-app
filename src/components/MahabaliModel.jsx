import { useGLTF } from "@react-three/drei";

export default function MahabaliModel() {
  const { scene } = useGLTF("/models/mahabali.glb");

  return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
}
