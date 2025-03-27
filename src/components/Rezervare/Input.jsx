import React from "react";
function Input({ type, name, placeholder, required }) {
  return (
    <div>
      <input type={type} name={name} id={name} placeholder={placeholder} required={required} />
    </div>
  );
}

export default Input;
