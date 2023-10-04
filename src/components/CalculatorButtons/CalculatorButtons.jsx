import React from "react";

const CalculatorButtons = ({btnText}) => {
  return (
    <div
      className="text-2xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
    >
      {btnText}
    </div>
  );
};

export default CalculatorButtons;
