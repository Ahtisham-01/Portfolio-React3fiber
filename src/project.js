
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import "./styles.css"
import {  useAnimations } from '@react-three/drei'
import  { useRef } from 'react'
import  Aboutme  from "./aboutme"

function Model({props }) {

    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/accelerated_particles.glb')
   
    return (
      <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model"scale={50} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Torus001_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.material} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material} />
              </group>
              <group name="Torus002_2">
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material} />
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    )
  }
  
export const project = () => {
  return (
    <>
    <div>
<div className="bg" >

      <h1>
        My <span className='p-heaing'>Portfolio</span>
        <br />
        <br/>
        <span>Ehtisham</span><span style={{ fontSize: '0.4em' }}>kiani</span>
      </h1>
      <div className='' >
  <div class="u1">MY PROJECTS</div>
  </div>
      <div className='m'>
 


        <Canvas dpr={[1.5, 2]} linear shadows>
          <fog attach="fog" args={['#272730', 16, 30]} />
          <ambientLight intensity={0.75} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={1} position={[-10, -25, -10]} />
            <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
          </PerspectiveCamera>
          <Suspense fallback={null}>
            <Model url="/accelerated_particles.glb" />
          </Suspense>
          <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Stars radius={500} depth={50} count={1000} factor={10} />
       
        </Canvas>
        <div className="layer" />
        <Loader />
      </div>
   
      </div>
    </div>
    </>
  )
}
export default project