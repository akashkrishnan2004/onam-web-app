// import { useGLTF } from "@react-three/drei";

// export default function MahabaliModel() {
//   const { scene } = useGLTF("/models/mahabali.glb");

//   return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
// }


// import { useGLTF } from "@react-three/drei";

// function MahabaliModel() {
//   const { scene } = useGLTF("/models/mahabali.glb");

//   return (
//     <primitive
//       object={scene}
//       scale={2}
//       position={[0, -1.5, 0]}
//     />
//   );
// }

// useGLTF.preload("/models/mahabali.glb");

// export default MahabaliModel;

import { useGLTF } from "@react-three/drei";

export default  function MahabaliModel() {

  const { scene } = useGLTF("/models/mahabali.glb");

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0,0,0]}
    />
  );
}


useGLTF.preload("/models/mahabali.glb");
