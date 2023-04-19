import React, { useState } from 'react'
import Task from './Task'

const TasksSection=({taskList,handleDelete,handleSave})=>{
    return <div className='tasks_section'>
        {
            taskList.map((task,index)=>{
                // const [taskName,setTaskName]=useState(task);
                // const [editMode,setEditMode]=useState(false);
                return <>
                    <Task task={task} index={index} handleDelete={handleDelete} handleSave={handleSave}/>
                </>
            })
        }
    </div>
}

export default TasksSection