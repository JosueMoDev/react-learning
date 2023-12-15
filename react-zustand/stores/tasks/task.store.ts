import { StateCreator, create } from 'zustand';

interface TaskState {
    tasks: Record<string, Task>;
    getTaskByStatus: (status: Status) => Task[];
}

import { Status, Task } from '../../src/interfaces/task.interface';

const tasksApi: StateCreator<TaskState> = (set, get) => ({
  tasks: {
    "ABC-1": { id: "ABC-1", title: "Task 1", status: "open" },
    "ABC-2": { id: "ABC-2", title: "Task 2", status: "done" },
    "ABC-3": { id: "ABC-3", title: "Task 3", status: "open" },
    "ABC-4": { id: "ABC-4", title: "Task 4", status: "open" },
    "ABC-5": { id: "ABC-5", title: "Task 5", status: "in-progress" },
  },

  getTaskByStatus (status: Status): Task[] {
    return Object.values( get().tasks).filter((task) => task.status === status );
  }
});

export const useTaskStore = create<TaskState>()(tasksApi);