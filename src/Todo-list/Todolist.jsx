import React, { useEffect, useState } from "react";
import ToDoMenu from "../components/ToDoMenu/ToDoMenu";
import ToDoHeading from "../components/ToDoHeading/ToDoHeading";
import generateUniqueId from "generate-unique-id";
import Swal from "sweetalert2";
import ToDoViewer from "../components/ToDoViewer/ToDoViewer";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [isTaskComplete, setIsTaskComplete] = useState(false);
  const [buttonText, setButtonText] = useState("Complete");
  // Rendering the tasks on loading of page or change in state
  const getTasksFromLocalStorage = () => {
    const storedTasks = JSON.parse(localStorage.getItem("TASKS")) || [];
    setTasks(storedTasks);
  };
  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);
  //=============== Task Add handler=================
  const addToDoHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskName = form.taskName.value;
    const taskDescription = form.descriptionName.value;
    form.reset();
    // creating a task in an object
    const taskDetails = {
      id: generateUniqueId(),
      taskName,
      taskDescription,
      completed: false,
    };
    // Update the tasks state with the newly added task
    const updatedTasks = [...tasks, taskDetails];
    setTasks(updatedTasks);
    localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your to do has been added",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  // ===============Task Complete handler===============
  const taskCompleteToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
  };
  //=============== Task Delete handler=================
  const taskDeleteHandler = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-neutral-700 min-h-screen">
      <div className="container mx-auto ">
        <div>
          <ToDoHeading></ToDoHeading>
          <ToDoMenu addToDoHandler={addToDoHandler}></ToDoMenu>
        </div>

        <div>
          {tasks.map((e) => (
            <ToDoViewer
              key={e.id}
              taskDeleteHandler={() => taskDeleteHandler(e.id)}
              taskCompleteToggle={() => taskCompleteToggle(e.id)}
              taskHeading={e.taskName}
              taskHeadingStyle={`text-yellow-500 text-5xl ${
                e.completed ? "line-through" : ""
              }`}
              taskPara={e.taskDescription}
              taskParaStyle={`text-white md:text-2xl my-4 ${
                e.completed ? "line-through" : ""
              } `}
              buttonText={e.completed ? "Completed" : buttonText}
            ></ToDoViewer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
