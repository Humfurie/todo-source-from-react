import { useReducer } from "react";
import AddTask from "../components/addtask";
import TaskList from "../components/tasklist";

export default function Home() {

    const tasksReducer = (tasks: any, action: any) => {
      switch (action.type) {
        case 'added': {
          return [...tasks, {
            id: action.id,
            text: action.text,
            done: false
          }];
        }
        case 'changed': {
          return tasks.map((t: { id: any; }) => {
            if (t.id === action.task.id) {
              return action.task;
            } else {
              return t;
            }
          });
        }
        case 'deleted': {
          return tasks.filter((t: { id: any; }) => t.id !== action.id);
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
    }
    
    let nextId = 3;
    const initialTasks = [
      { id: 0, text: 'Visit Kafka Museum', done: true },
      { id: 1, text: 'Watch a puppet show', done: false },
      { id: 2, text: 'Lennon Wall pic', done: false }
    ]

      const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
      )
    
      const handleAddTask = (text: any) => {
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        })
      }
    
      const handleChangeTask = (task: any) => {
        dispatch({
          type: 'changed',
          task: task
        })
      }
    
      const handleDeleteTask = (taskId: any) => {
        dispatch({
          type: 'deleted',
          id: taskId
        })
      }
    
      return (
        <>
          <h1>Prague itinerary</h1>
          <AddTask
            onAddTask={handleAddTask}
          />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </>
      )
    }
    
    

