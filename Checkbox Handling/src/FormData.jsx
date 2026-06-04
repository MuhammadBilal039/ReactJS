import { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center text-white text-xl">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
        className="px-5 py-3 bg-gray-700 rounded-xl mb-4"
          type="email"
          name="email"
          value={formData.email}
          placeholder="enter your email..."
          onChange={handleChange}
        />
        <label htmlFor="tc" className="flex gap-3 items-center mb-4">
          <input
            type="checkbox"
            id="tc"
            checked={formData.tc}
            name="tc"
            onChange={handleChange}
          />
          Terms & Conditions
        </label>
        <button className="py-3 px-6 bg-gray-900 rounded-xl hover:bg-gray-700 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default FormData;
