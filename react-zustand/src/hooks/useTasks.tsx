import { DragEvent, useState } from "react";
import { useTaskStore } from "../../stores";
import { Status } from "../interfaces/task.interface";
import Swal from "sweetalert2";

interface Props {
  status: Status;
}

export const useTasks = ({ status }: Props) => {
  const isDragging = useTaskStore((state) => state.isDragging);
  const onChangeStatus = useTaskStore((state) => state.changeTaskStatus);
  const addTask = useTaskStore((state)=>state.addTask)

  const [onDragOver, setOnDragOver] = useState<boolean>(false);

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: "New Task",
      input: "text",
      inputLabel: "Task title",
      inputPlaceholder: "task title",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Debe de ingresar un nombre para la tarea";
        }
      },
    });

    if (!isConfirmed) return;
    addTask(value, status);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  };

  const hadleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onChangeStatus(status);
    setOnDragOver(false);
  };

  return {
    // ? properties
      isDragging,
      onDragOver,
      //  ! methods
      handleAddTask,
      hadleDrop,
      handleDragLeave,
      handleDragOver
  }
};
