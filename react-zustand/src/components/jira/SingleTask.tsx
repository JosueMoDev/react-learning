import { IoReorderTwoOutline } from "react-icons/io5";
import { Task } from "../../interfaces/task.interface"
import { useTaskStore } from "../../../stores";

interface props {
    task: Task;
}
export const SingleTask = ({ task }: props) => {
  const setDragTask = useTaskStore((state) => state.setDraggingTask);
  const removeDragTask = useTaskStore((state) => state.removeDraggingTask);

 

  return (
    <div
      draggable
      onDragStart={setDragTask}
      onDragEnd={removeDragTask}
      className="flex items-center justify-between p-2 mt-5"
    >
      <div className="flex items-center justify-center gap-2">
        <p className="text-base font-bold text-navy-700">{task.title}</p>
      </div>
      <span className="w-6 h-6 cursor-pointer text-navy-700">
        <IoReorderTwoOutline />
      </span>
    </div>
  );
}
