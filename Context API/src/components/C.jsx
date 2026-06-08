import { useMyContext } from "../store/MyContext"

const C = () => {
  const {count} = useMyContext()
  return (
    <div className="p-10 bg-blue-800 rounded mt-3">C Component
    <h2 className="text-center p-3 bg-gray-900">{count}</h2></div>
  )
}

export default C