import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingShapes: React.FC = () => {
  const cubeRef = useRef<THREE.Mesh>(null)
  const coinRef = useRef<THREE.Mesh>(null)
  const blobRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(time * 0.5) * 0.2
      cubeRef.current.rotation.y += 0.01
    }
    
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.005
      coinRef.current.position.y = Math.sin(time * 0.8) * 0.3
    }
    
    if (blobRef.current) {
      blobRef.current.scale.setScalar(1 + Math.sin(time * 0.6) * 0.1)
    }
  })

  return (
    <group>
      {/* Floating Cube */}
      <mesh ref={cubeRef} position={[-4, 1, -5]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial 
          color="#4F46E5" 
          metalness={0.3} 
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* QR Coin */}
      <mesh ref={coinRef} position={[4, 0, -4]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
        <meshStandardMaterial 
          color="#22D3EE" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Liquid Blob */}
      <mesh ref={blobRef} position={[0, -2, -8]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#312E81" 
          metalness={0.1} 
          roughness={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Additional Cubes */}
      <mesh position={[5, 2, -6]} rotation={[0.2, 0.3, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#4F46E5" metalness={0.5} roughness={0.3} transparent opacity={0.6} />
      </mesh>
      
      <mesh position={[-3, -1, -7]} rotation={[0.1, -0.2, 0.1]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#22D3EE" metalness={0.4} roughness={0.3} transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

export default FloatingShapes
