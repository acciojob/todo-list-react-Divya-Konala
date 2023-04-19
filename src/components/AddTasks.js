import React, { useEffect, useState } from 'react'
import TasksSection from './TasksSection';

const AddTask=()=>{
    let [currentTask,setCurrentTask]=useState("");
    let [taskList,setTaskList]=useState([]);
    const handleAdd=()=>{
        setTaskList([...taskList,currentTask]);
        setCurrentTask("");
    }
    const handleDelete=(id)=>{
        setTaskList(taskList.filter((task,index)=>index!==id));
    }

    const handleSave=(id,taskName)=>{
        setTaskList(taskList.map((task,index)=>{
            return (index!==id)?task:taskName;
        }))
    }
    return <div className='AddTask'>
        <div className='add_tasks_section'>
            <h1>To Do List</h1>
            <textarea value={currentTask} onChange={(e)=>setCurrentTask(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
        <TasksSection taskList={taskList} handleDelete={handleDelete} handleSave={handleSave}/>
    </div>
}

export default AddTask