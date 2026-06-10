import{ useState } from "react";

const SingleRadioButton = () => {
  const [gender, setGender] = useState("");

  return (
    <>
      <label htmlFor="male">
        <input
          id="male"
          type="radio"
          value={"male"}
          checked={gender === "male"}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <br />
      <label htmlFor="female">
        <input
          id="female"
          type="radio"
          value={"female"}
          checked={gender === "female"}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <br />
      <label htmlFor="other">
        <input
          id="other"
          type="radio"
          value={"other"}
          checked={gender === "other"}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>
    </>
  );
};

export default SingleRadioButton;
