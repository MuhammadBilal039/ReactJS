import data from "./data";
import { useState } from "react";

const DependentSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  console.log(selectedCountry, selectedCity);

  return (
    <div className="mt-50">
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity("");
        }}
      >
        <option value="">-- Select Country --</option>
        {Object.keys(data)?.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>

      {selectedCountry && (
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="">-- Select Country --</option>
          {data[selectedCountry].map((city) => {
            return <option value={city}>{city}</option>;
          })}
        </select>
      )}

      <p>Country: {selectedCountry} , City: {selectedCity}</p>
    </div>
  );
};

export default DependentSelect;
