import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { v4 as uuid } from 'uuid';
import { Status, Task } from '../../interfaces/task.interface';
interface TaskState {
  currentDraggingTask?: string;
  isDragging: boolean;
  tasks: Record<string, Task>;
  getTaskByStatus: (status: Status) => Task[];
  setDraggingTask: (id: string) => void;
  removeDraggingTask: () => void;
  changeTaskStatus: (status: Status) => void;
  addTask: (title: string, status: Status) => void;
}


const tasksApi: StateCreator<TaskState, [["zustand/devtools", never],  ["zustand/immer", never]]> = (set, get) => ({
  isDragging: false,
  currentDraggingTask: undefined,
  tasks: {
    "ABC-1": { id: "ABC-1", title: "Task 1", status: "open" },
    "ABC-2": { id: "ABC-2", title: "Task 2", status: "done" },
    "ABC-3": { id: "ABC-3", title: "Task 3", status: "open" },
    "ABC-4": { id: "ABC-4", title: "Task 4", status: "open" },
    "ABC-5": { id: "ABC-5", title: "Task 5", status: "in-progress" },
  },

  getTaskByStatus (status: Status): Task[] {
    return Object.values( get().tasks).filter((task) => task.status === status );
  },


  addTask: (title: string, status: Status) => {
    const newTask = { id: uuid(), title, status };
    set( (state) => {
      state.tasks[newTask.id] = newTask;
    });
  },

  setDraggingTask: (id: string) => set(({ isDragging: true, currentDraggingTask: id }), false, 'SetDraggingTask'),

  removeDraggingTask: () => set(({ isDragging: false, currentDraggingTask: undefined }), false, 'removeDraggingTask'),

  changeTaskStatus: (status: Status) => {
    const id = get().currentDraggingTask;
    if (!id) return;
    const task = {...get().tasks[id] };
    task.status = status;
    set((state) => {
      state.tasks[id] = {
        ...task,
      }
    })
  }
});

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      immer(tasksApi),
      { name: 'taks-storage'}
    )
  )
);