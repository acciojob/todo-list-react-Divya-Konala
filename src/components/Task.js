import React, { useState } from "react";

const Task=({task,index,handleSave,handleDelete})=>{
    const [editMode,setEditMode]=useState(false);
    const [inputValue,setInputValue]=useState(task);
    return <div className="task">
        {
        (editMode)
                    ?<>
                        <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                        <button onClick={()=>{setEditMode(false);handleSave(index,inputValue);}} className='save'>Save</button>
                    </>
                    :<>
                        <p>{task}</p>
                        <button className='edit' onClick={()=>{setEditMode(true)}}>Edit</button>
                        <button className='delete' onClick={()=>handleDelete(index)}>Delete</button>
                    </>
                    }
    </div>
}

export default Task