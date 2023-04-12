import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 rounded-lg px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles} font-poppins`}
    >
      Ge Started
    </button>
  );
};

export default Button;
