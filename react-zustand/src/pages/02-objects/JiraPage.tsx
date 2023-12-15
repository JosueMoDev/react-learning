import { useTaskStore } from '../../../stores';
import { JiraTasks } from '../../components';

export const JiraPage = () => {
  const openTasks = useTaskStore((store) => store.getTaskByStatus('open'));
  const inProgreseTasks = useTaskStore((store) => store.getTaskByStatus("in-progress"));
  const doneTasks = useTaskStore((store) => store.getTaskByStatus("done"));
  
  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          
          <JiraTasks title='Pendientes' status='open' tasks={openTasks} />
          
          <JiraTasks title='Avanzando' status='in-progress' tasks={inProgreseTasks}/>
          
          <JiraTasks title='Terminadas' status='done' tasks={doneTasks}/>

      </div>

      



    </>
  );
};