import { IoCheckmarkCircleOutline, IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { Status, Task } from '../../interfaces/task.interface';
import { SingleTask } from './SingleTask';
import { DragEvent, useState } from "react";
import { useTaskStore } from '../../../stores';
import classNames from 'classnames';

interface Props {
  title: string;
  tasks: Task[]
  value: Status;
}


export const JiraTasks = ({ title, tasks }: Props) => {
  const isDragging = useTaskStore((state) => state.isDragging);
  const [onDragOver, setOnDragOver] = useState<boolean>(false)
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true)
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false)
  }

  const hadleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  }
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={hadleDrop}
      className={
        classNames(
          '!text-black border-4  relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]',
          {
            'border-blue-500 border-dotted': isDragging,
            'border-green-500 border-dotted': isDragging && onDragOver,

          }
        )}
    >


      {/* Task Header */ }
      <div className="relative flex flex-row justify-between">

        <div className="flex items-center justify-center">

          <div className="flex items-center justify-center bg-indigo-100 rounded-full h-9 w-9">
            <span className="flex items-center justify-center w-6 h-6 text-brand-500">
              <IoCheckmarkCircleOutline style={ { fontSize: '50px' } } />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{ title } | {tasks.length}</h4>
        </div>

        <button>
          <IoEllipsisHorizontalOutline />
        </button>

      </div>

      {/* Task Items */ }
      <div className="w-full h-full">
      {
        tasks?.map((task) => (<SingleTask key={task.id}  task={task}/>)) ??
        null
      }
      </div>
    </div>
  );
};