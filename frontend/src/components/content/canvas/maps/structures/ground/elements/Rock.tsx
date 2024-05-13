/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Rock.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Rock.tsx 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ObjectSettingType } from '../../../../../../../types/GameType'

import { useBox } from '@react-three/cannon'


type GLTFResult = GLTF & {
  nodes: {
    Rock_Dark_Gray_0: THREE.Mesh
  }
  materials: {
    Dark_Gray: THREE.MeshStandardMaterial
  }
}


export function Rock(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF('/models/object/Rock.glb') as GLTFResult

  
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
      <mesh ref={ref} geometry={nodes.Rock_Dark_Gray_0.geometry} material={materials.Dark_Gray} position={props.position} rotation={props.rotation} />
    </group>
  )
}

useGLTF.preload('/models/object/Rock.glb')
