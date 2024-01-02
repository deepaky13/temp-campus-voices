import React from "react";
// import Wrapper from "../assets/wrapper/FormRowLayout";
const FormRow2 = ({ type, name, onChange, labelText, defaultValue }) => {
  return (
    <div className="form-row2">
      <label htmlFor={name} className="form-label2">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input2"
        defaultValue={defaultValue || " "}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow2;
