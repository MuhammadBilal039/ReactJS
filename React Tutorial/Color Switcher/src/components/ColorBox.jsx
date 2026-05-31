import React from 'react'

const ColorBox = ({selectedColor}) => {
  return (
     <div style={{
          backgroundColor: selectedColor
     }} className="w-[300px] h-[300px] border-2 rounded-xl flex justify-center items-center text-2xl font-bold text-white">{selectedColor.toUpperCase()}</div>
  )
}

export default ColorBox