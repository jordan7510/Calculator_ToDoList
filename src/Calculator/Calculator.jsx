import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [memory, setMemory] = useState({
    firstNumber: "",
    operator: "",
  });

  const digitInput = (numbers) => {
    if (displayValue === "0" || memory.operator === "=") {
      setDisplayValue(String(numbers));
      if (memory.operator === "=") {
        setMemory({
          firstNumber: "",
          operator: "",
        });
      }
    } else if (displayValue.length < 10) {
      setDisplayValue(displayValue + numbers);
    }
  };

  const operatorInput = (operator) => {
    if (memory.firstNumber === "") {
      setMemory({
        firstNumber: displayValue,
        operator: operator,
      });
      setDisplayValue("");
    } else {
      calculateResult();
      setMemory({
        firstNumber: displayValue,
        operator: operator,
      });
      setDisplayValue("");
    }
  };

  const calculateResult = () => {
    const firstNumber = parseFloat(memory.firstNumber);
    const secondNumber = parseFloat(displayValue);
    let result;

    switch (memory.operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber !== 0) {
          result = firstNumber / secondNumber;
        } else {
          result = "Error dividing by zero";
        }
        break;
      default:
        break;
    }

    setDisplayValue(result.toString());
    setMemory({
      firstNumber: result.toString(),
      operator: "=",
    });
  };

  const deleteDigitHandler = () => {
    if (
      displayValue.length === 1 ||
      displayValue === "Error dividing by zero"
    ) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const allClearHandler = () => {
    setDisplayValue("0");
    setMemory({
      firstNumber: "",
      operator: "",
    });
  };

  return (
    <div className=" h-screen w-auto bg-slate-800 flex items-center justify-center">
      <div className="h-fit w-72 border-2 rounded-2xl bg-[#FFFFFF] p-4 pt-0">
        <div>
          <div className="flex flex-row-reverse gap-3 items-center">
            <div className=" relative h-[40px] rounded-md w-36 bg-[#362115]">
            <div className="absolute inset-y-0 left-1/4 w-[1px] bg-gray-950"></div>
            <div className="absolute inset-y-0 left-2/4 w-[1px] bg-gray-950"></div>
            <div className="absolute inset-y-0 left-3/4 w-[1px] bg-gray-950"></div>
            </div>
            <div>
              <h1 className="font-casio text-4xl text-left font-extrabold text-[#012F97]">
                CASIO
              </h1>
              <p className=" font-casio text-left text-lg font-bold">
                10 Digit
              </p>
            </div>
          </div>
        </div>
        <div className=" text-white text-2xl absolute mt-[28px] ml-[12px] operator-display">
          {memory.operator}
        </div>
        <div className="h-16 text-white bg-gray-800 rounded-lg flex flex-col justify-end  p-3 overflow-hidden mt-3">
          <div>
            {" "}
            <h1 className="text-4xl text-right">{displayValue}</h1>{" "}
          </div>
        </div>

        <div className="h-fit rounded grid grid-cols-4 gap-1 mt-4">
          <div
            onClick={allClearHandler}
            className="text-2xl bg-[#c03245] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-[#5f242c]"
          >
            AC
          </div>
          <div
            onClick={deleteDigitHandler}
            className="text-2xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            Del
          </div>
          <div
            onClick={() => digitInput(".")}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            .
          </div>
          <div
            onClick={() => operatorInput("/")}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            /
          </div>
          <div
            onClick={() => digitInput(7)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            7
          </div>
          <div
            onClick={() => digitInput(8)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            8
          </div>
          <div
            onClick={() => digitInput(9)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            9
          </div>
          <div
            onClick={() => operatorInput("*")}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            *
          </div>
          <div
            onClick={() => digitInput(4)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            4
          </div>
          <div
            onClick={() => digitInput(5)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            5
          </div>
          <div
            onClick={() => digitInput(6)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            6
          </div>
          <div
            onClick={() => operatorInput("+")}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            +
          </div>
          <div
            onClick={() => digitInput(1)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            1
          </div>
          <div
            onClick={() => digitInput(2)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            2
          </div>
          <div
            onClick={() => digitInput(3)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            3
          </div>
          <div
            onClick={() => operatorInput("-")}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            -
          </div>
          <div
            onClick={() => digitInput("00")}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            00
          </div>
          <div
            onClick={() => digitInput(0)}
            className="text-4xl bg-[#303338] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-slate-600"
          >
            0
          </div>
          <div
            onClick={calculateResult}
            className="text-4xl bg-[#206826] text-white p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-[#245a28] col-span-2"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
