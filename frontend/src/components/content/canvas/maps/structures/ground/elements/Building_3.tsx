/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Building_3.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Building_3.tsx 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ObjectSettingType } from '../../../../../../../types/GameType'
import { useBox } from '@react-three/cannon'


type GLTFResult = GLTF & {
  nodes: {
    Building_3_Blue_2_0: THREE.Mesh
    Building_3_Blue_0: THREE.Mesh
    Building_3_Dark_Blue_0: THREE.Mesh
    Building_3_Yellow_2_0: THREE.Mesh
  }
  materials: {
    Blue_2: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
    Dark_Blue_17: THREE.MeshStandardMaterial
    Yellow_2: THREE.MeshStandardMaterial
  }
}


export function Building_3(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF('/models/object/Building_3.glb') as GLTFResult
  const [ref] = useBox<THREE.Mesh>(() => ({
        args: [1, 1, 1],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
  return (
    <group  position={[0, 0, 0]} dispose={null}>
      <group>
        <mesh ref={ref} geometry={nodes.Building_3_Blue_2_0.geometry} material={materials.Blue_2} position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.Building_3_Blue_0.geometry} material={materials.Blue} position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.Building_3_Dark_Blue_0.geometry} material={materials.Dark_Blue_17} position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.Building_3_Yellow_2_0.geometry} material={materials.Yellow_2} position={props.position} rotation={props.rotation}/>
      </group>
    </group>
  )
}

useGLTF.preload('/models/object/Building_3.glb')
