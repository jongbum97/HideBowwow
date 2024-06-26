/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Bush_1.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Bush_1.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";
import { useBox } from "@react-three/cannon";
import React from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Bush001_Forest_Green_0: THREE.Mesh;
    Bush001_Gold__0: THREE.Mesh;
    Bush001_Red_0: THREE.Mesh;
  };
  materials: {
    Forest_Green: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
  };
};

function Bush_1Component(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Bush_1.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [2.2, 2.2, 2.5],
    mass: 0.1,
    position: props.position,
    rotation: props.rotation,
    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
  }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <group>
        <mesh
          ref={ref}
          geometry={nodes.Bush001_Forest_Green_0.geometry}
          material={materials.Forest_Green}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Bush001_Gold__0.geometry}
          material={materials.Gold}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Bush001_Red_0.geometry}
          material={materials.material}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Bush_1.glb");

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
  return (
      prevProps.position[0] === nextProps.position[0] &&
      prevProps.position[1] === nextProps.position[1] &&
      prevProps.position[2] === nextProps.position[2]
  );
}

export const Bush_1 = React.memo(Bush_1Component, areEqual);