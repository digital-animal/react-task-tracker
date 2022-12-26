import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' onDoubleClick={() => {
            onToggle(task.id)}}>
            {/* <h3>My Task</h3> */}
            <h3>
                {task.text}
                <FaTimes
                    style={delIconStyle}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <small>{task.date}</small>
        </div>
    )
}

const delIconStyle = {
    color: 'red',
    cursor: 'pointer',
}

export default Task
