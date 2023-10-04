import React from "react";
const ToDoViewer = ({
  taskHeading,
  taskPara,
  taskDeleteHandler,
  taskCompleteToggle,
  buttonText,
  taskHeadingStyle,
  taskParaStyle,
}) => {
  return (
    <section className="space-y-5 pb-1">
      <div className="w-12/6">
        <div className=" bg-gray-800 rounded-xl h-fit py-2 my-2 md:flex md:items-center md:justify-between">
          <div className="px-10 flex-1">
            <h2 className={taskHeadingStyle}>{taskHeading}</h2>
            <p className={taskParaStyle}>{taskPara}</p>
          </div>
          <div className="px-10 space-x-2">
            <button
              onClick={taskCompleteToggle}
              className={`text-white bg-green-700 px-4 py-1 rounded`}
            >
              {buttonText}
            </button>
            <button
              onClick={taskDeleteHandler}
              className={`text-white bg-red-500 px-4 py-1 rounded`}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDoViewer;
