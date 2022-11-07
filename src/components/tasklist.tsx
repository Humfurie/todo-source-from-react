import { Key, useState } from 'react';

const TaskList = (props: any) => {

    const {
        tasks,
        onChangeTask,
        onDeleteTask
      } = props

  return (
    <ul>
      {tasks.map((task: { id: Key | null | undefined; }) => (

        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

const Task = (props: any) => {
    const { task, onChange, onDelete } = props
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  console.log(task)
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}

export default TaskList
