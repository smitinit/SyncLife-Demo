/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  SoftShadows,
} from "@react-three/drei";
import { useRef, Suspense } from "react";

const Avatar = ({ url }) => {
  const { scene } = useGLTF(url);
  const avatarRef = useRef();

  return (
    <primitive
      ref={avatarRef}
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
      castShadow
    />
  );
};

export default function AvatarViewer() {
  const avatarUrl =
    "https://models.readyplayer.me/679f9b9b460cb60ba5c827ce.glb";

  return (
    <div className="h-full w-full rounded-lg bg-gray-800/50">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 4], fov: 60 }}
        gl={{ antialias: true }}
      >
        <SoftShadows size={50} near={9} samples={8} rings={11} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} castShadow intensity={1} />
        <directionalLight position={[-2, 2, -5]} castShadow intensity={0.7} />
        <ContactShadows position={[0, -0.001, 0]} opacity={0.5} blur={2} />
        <Suspense fallback={null}>
          <Avatar url={avatarUrl} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxDistance={5}
          minDistance={2}
          target={[0, 1.5, 0]}
        />
      </Canvas>
    </div>
  );
}
