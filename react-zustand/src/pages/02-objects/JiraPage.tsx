import { useTaskStore } from '../../../stores';
import { JiraTasks } from '../../components';

export const JiraPage = () => {
  const openTasks = useTaskStore((store) => store.getTaskByStatus('open'));
  const inProgreseTasks = useTaskStore((store) => store.getTaskByStatus("in-progress"));
  const doneTasks = useTaskStore((store) => store.getTaskByStatus("done"));
  
  console.log(openTasks)
  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pendientes' value='open' tasks={openTasks} />
          
          <JiraTasks title='Avanzando' value='in-progress' tasks={inProgreseTasks}/>
          
          <JiraTasks title='Terminadas' value='done' tasks={doneTasks}/>

      </div>

      



    </>
  );
};