import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {


    return (
        <div>
            {tasks.map((task) => (
                // <h3 key={task.id}>{task.text}</h3>
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onTogg={onToggle} />
            ))}
        </div>
    )
}

export default Tasks
