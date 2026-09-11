import React from 'react'

interface CursorGlowProps {
  position: { x: number; y: number }
}

const CursorGlow: React.FC<CursorGlowProps> = ({ position }) => {
  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CursorGlow
