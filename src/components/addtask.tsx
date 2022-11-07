import { useState } from 'react';

const AddTask = (props: any) => {
    const { onAddTask } = props
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    )
}

export default AddTask
