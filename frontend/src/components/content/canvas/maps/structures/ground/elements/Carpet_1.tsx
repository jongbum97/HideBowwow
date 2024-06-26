/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Carpet_1.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Carpet_1.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';
import React from 'react';

type GLTFResult = GLTF & {
    nodes: {
        Carpet_16: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
    };
};

function Carpet_1Component(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Carpet_1.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [8.6, 5, 0.1],
        type: "Static",
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0,-0.3,0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Carpet_16.geometry}
                material={materials.Cartoon_Room_Mat}
                position={props.position}
                rotation={props.rotation}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Carpet_1.glb');

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
    return (
        prevProps.position[0] === nextProps.position[0] &&
        prevProps.position[1] === nextProps.position[1] &&
        prevProps.position[2] === nextProps.position[2]
    );
  }
  
  export const Carpet_1 = React.memo(Carpet_1Component, areEqual);