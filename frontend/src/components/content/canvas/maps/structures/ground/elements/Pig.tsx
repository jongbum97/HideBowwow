/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Pig.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Pig.tsx 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ObjectSettingType } from '../../../../../../../types/GameType'

import { useBox } from '@react-three/cannon'
type GLTFResult = GLTF & {
  nodes: {
    Pig_Black_0: THREE.Mesh
    Pig_Light_Pink_0: THREE.Mesh
    Pig_Pink_0: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Light_Pink: THREE.MeshStandardMaterial
    Pink: THREE.MeshStandardMaterial
  }
}


export function Pig(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF('/models/object/Pig.glb') as GLTFResult
  
  const [ref] = useBox<THREE.Mesh>(() => ({

    args: [1, 1, 1],

    mass: 0.1,

    position: props.position,

    rotation: props.rotation,

    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한

    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한

    }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <group>
        <mesh ref={ref} geometry={nodes.Pig_Black_0.geometry} material={materials.Black} position={props.position} rotation={props.rotation} />
        <mesh ref={ref} geometry={nodes.Pig_Light_Pink_0.geometry} material={materials.Light_Pink} position={props.position} rotation={props.rotation} />
        <mesh ref={ref} geometry={nodes.Pig_Pink_0.geometry} material={materials.Pink} position={props.position} rotation={props.rotation} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/object/Pig.glb')
