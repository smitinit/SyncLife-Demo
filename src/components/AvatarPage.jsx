/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  SoftShadows,
  Html,
} from "@react-three/drei";
import { useRef, Suspense, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Avatar component to load GLTF model
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

const LoadingSpinner = () => {
  return (
    <div className="w-12 h-12 border-4 border-t-4 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
  );
};

// Actual URLs for models
const avatarOptions = [
  {
    label: "Character_Male-1",
    url: "https://models.readyplayer.me/679f9b9b460cb60ba5c827ce.glb",
  },
  {
    label: "Character_Male-2",
    url: "https://models.readyplayer.me/679fa7ffc67d3b4b83d7ec8c.glb",
  },
  {
    label: "Character_Male-3",
    url: "https://models.readyplayer.me/679fcdd326b9f327f16ef934.glb",
  },
  {
    label: "Character_Female-1",
    url: "https://models.readyplayer.me/679fcd272523c68992f8afdc.glb",
  },
  {
    label: "Character_Female-2",
    url: "https://models.readyplayer.me/679fa6c64fac2549b0ac29fc.glb",
  },
  {
    label: "Character_Female-3",
    url: "https://models.readyplayer.me/679fcdac35ba37903d48647b.glb",
  },
];

const AvatarViewer = () => {
  const [avatar, setAvatar] = useState(
    "https://models.readyplayer.me/679f9b9b460cb60ba5c827ce.glb"
  );

  const [openSC, setOpenSC] = useState(false);

  useEffect(() => {
    useGLTF.clear(avatar);
  }, [avatar]);

  return (
    <div className="rounded-xl border border-zinc-800/50 bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative h-[calc(100vh-9rem)] w-full rounded-lg bg-zinc-900/30">
        <div className="absolute top-0 right-0 w-[15rem] z-50 p-4 border-zinc-700/50 border-[1px]">
          <span
            className="hover:scale-105 tracking-tight text-pretty flex justify-center gap-4  cursor-pointer"
            onClick={() => setOpenSC((prev) => !prev)}
          >
            <span className="cursor-pointer">{!openSC && <ChevronLeft />}</span>
            Avatars
            <span className="cursor-pointer">{openSC && <ChevronRight />}</span>
          </span>

          {openSC && (
            <div className="flex w-fit flex-col mt-4 flex-wrap gap-4 px-4 justify-center ">
              {avatarOptions.map((option) => (
                <button
                  key={option.url}
                  onClick={() => setAvatar(option.url)}
                  className={`px-6 py-2 text-sm font-semibold rounded-xl 
        ${
          avatar === option.url
            ? "bg-zinc-700 text-zinc-100 scale-105 shadow-lg"
            : "bg-zinc-950/50 hover:bg-zinc-700 hover:scale-105 text-zinc-200"
        } 
        focus:outline-none `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 rounded-lg bg-gradient-radial from-white/10 via-transparent to-transparent blur-2xl" />
          <div className="absolute inset-0 rounded-lg bg-gradient-radial from-white/5 via-transparent to-transparent" />
        </div>

        {/* 3D Canvas */}
        <Canvas
          shadows
          camera={{ position: [0, 1.5, 4], fov: 60 }}
          gl={{ antialias: true }}
          className="rounded-lg"
        >
          <SoftShadows size={50} near={9} samples={8} rings={11} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} castShadow intensity={1} />
          <directionalLight position={[-2, 2, -5]} castShadow intensity={0.7} />
          <ContactShadows position={[0, -0.001, 0]} opacity={0.5} blur={2} />

          <Suspense
            fallback={
              <Html>
                <LoadingSpinner />
              </Html>
            }
          >
            {avatar && <Avatar url={avatar} key={avatar} />}
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
    </div>
  );
};

export default AvatarViewer;
