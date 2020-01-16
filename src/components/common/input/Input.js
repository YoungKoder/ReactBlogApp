import React from "react";

import "./Input.css";

const Input = ({
  inputType = "text",
  label,
  value,
  onChange,
  errorMassege,
  valid,
  shouldValidate,
  touched
}) => {
  let classNames = "input";
  const htmlFor = `${Math.floor(Math.random() * 10000)}`;

  if (!valid && shouldValidate && touched) {
    classNames += " invalid";
  }

  return (
    <div className={classNames}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />
      {!valid && shouldValidate && touched ? <span>{errorMassege}</span> : null}
    </div>
  );
};

export default Input;
