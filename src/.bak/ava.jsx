// import { Canvas } from "@react-three/fiber";
// import {
//   OrbitControls,
//   useGLTF,
//   ContactShadows,
//   SoftShadows,
// } from "@react-three/drei";
// import { useRef, Suspense, useState } from "react";

//  Avatar component to load GLTF model
// const Avatar = ({ url }) => {
//   const { scene } = useGLTF(url); // Load avatar model
//   const avatarRef = useRef();

//   return (
//     <primitive
//       ref={avatarRef}
//       object={scene}
//       scale={1.5}
//       position={[0, 0, 0]}
//       castShadow
//     />
//   );
// };

// const AvatarViewer = () => {
//   const [avatar, setAvatar] = useState(
//     "https://models.readyplayer.me/679f9b9b460cb60ba5c827ce.glb" // Default avatar URL
//   );

//   return (
//     <div className="rounded-xl border border-zinc-800/50 bg-black/40 p-4 backdrop-blur-sm">
//       <div className="relative h-[calc(100vh-9rem)] w-full rounded-lg bg-zinc-900/30">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 rounded-lg bg-gradient-radial from-white/10 via-transparent to-transparent blur-2xl" />
//           <div className="absolute inset-0 rounded-lg bg-gradient-radial from-white/5 via-transparent to-transparent" />
//         </div>

//         <div className="relative z-10 h-full">
//           {/* Character Selector */}
//           <div className="text-right">
//             <select
//               value={avatar}
//               onChange={(e) => setAvatar(e.target.value)}
//               className="w-fit px-4 py-2 text-zinc-100 bg-zinc-950/50 rounded-md focus:outline-none"
//             >
//               <option value="https://models.readyplayer.me/679f9b9b460cb60ba5c827ce.glb">
//                 Character_male_1
//               </option>
//               <option value="https://models.readyplayer.me/679fa7ffc67d3b4b83d7ec8c.glb">
//                 Character_male_2
//               </option>
//               <option value="https://models.readyplayer.me/679fcdd326b9f327f16ef934.glb">
//                 Character_male_3
//               </option>
//               <option value="https://models.readyplayer.me/679fcd272523c68992f8afdc.glb">
//                 Character_female_1
//               </option>
//               <option value="https://models.readyplayer.me/679fa6c64fac2549b0ac29fc.glb">
//                 Character_female_2
//               </option>
//               <option value="https://models.readyplayer.me/679fcdac35ba37903d48647b.glb">
//                 Character_female_3
//               </option>
//             </select>
//           </div>

//           {/* 3D Canvas */}
//           <Canvas
//             shadows
//             camera={{ position: [0, 1.5, 4], fov: 60 }}
//             gl={{ antialias: true }}
//           >
//             <SoftShadows size={50} near={9} samples={8} rings={11} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[2, 2, 5]} castShadow intensity={1} />
//             <directionalLight
//               position={[-2, 2, -5]}
//               castShadow
//               intensity={0.7}
//             />
//             <ContactShadows position={[0, -0.001, 0]} opacity={0.5} blur={2} />

//             {/* Avatar Rendering */}
//             <Suspense fallback={null}>
//               {avatar && <Avatar url={avatar} />}
//             </Suspense>

//             {/* Orbit Controls */}
//             <OrbitControls
//               enablePan={false}
//               maxPolarAngle={Math.PI / 2}
//               minPolarAngle={Math.PI / 2}
//               maxDistance={5}
//               minDistance={2}
//               target={[0, 1.5, 0]}
//             />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvatarViewer;
