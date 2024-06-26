/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Pot_full.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Pot_full.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';
import React from 'react';

type GLTFResult = GLTF & {
    nodes: {
        Pot_Full_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
    };
};

function Pot_fullComponent(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Pot_full.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [0.8, 0.8, 0.6],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0, 0.2, 0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Pot_Full_1.geometry}
                material={materials.Cartoon_Room_Mat}
                position={props.position}
                rotation={props.rotation}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Pot_full.glb');

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
    return (
        prevProps.position[0] === nextProps.position[0] &&
        prevProps.position[1] === nextProps.position[1] &&
        prevProps.position[2] === nextProps.position[2]
    );
  }

export const Pot_full = React.memo(Pot_fullComponent, areEqual);