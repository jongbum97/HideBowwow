/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Doll_rabbit.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Doll_rabbit.tsx 
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Toy_Rabbit_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
    };
};

export function Doll_rabbit(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Doll_rabbit.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [1, 1, 0.8],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0, 0.4, 0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Toy_Rabbit_1.geometry}
                material={materials.Cartoon_Room_Mat}
                position={props.position}
                rotation={props.rotation}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Doll_rabbit.glb');
