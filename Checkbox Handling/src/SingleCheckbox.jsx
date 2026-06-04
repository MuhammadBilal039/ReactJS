import  { useState } from 'react'

const SingleCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center text-white text-xl">
      <label htmlFor="cb" className="text-2xl">
        <input
          id="cb"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Terms and Conditions
      </label>
    </div>
  )
}

export default SingleCheckbox