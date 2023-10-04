import React from "react";
const ToDoMenu = ({ addToDoHandler }) => {
  return (
    <section className="bg-gray-800 rounded-xl  h-fit py-6 mb-5">
      <form onSubmit={addToDoHandler}>
        <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-5 md:items-center md:justify-center px-10 py-5 mx-auto my-0">
          <div>
            <div>
              <label className="text-white text-xl">Task Name</label>
            </div>
            <input
              required
              className="px-3 py-2 rounded-lg outline-none"
              placeholder="Add Task Name"
              type="text"
              name="taskName"
            ></input>
          </div>
          <div>
            <div>
              <label className="text-white text-xl">Task Description</label>
            </div>
            <input
              required
              className="px-3 py-2 rounded-lg outline-none"
              placeholder="Add Task Details"
              type="text"
              name="descriptionName"
            ></input>
          </div>
          <div className="md:mt-7">
            <button
              type="submit"
              className={`text-white bg-orange-500 px-4 py-1 rounded`}
            >
              Add ToDo
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ToDoMenu;
