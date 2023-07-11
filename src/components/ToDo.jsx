import React, { useState } from 'react'

function ToDo({name,id, priority, deadline, tag, setList,sTag}) {

    const [bolTexCrossed, setbolTexCrossed] = useState(false)

    const handleClickDelete = () => {
        setList((prev) => {  
            return prev.filter(taks=> taks.id !== id)
        } )
        sTag((prev) => {
            return prev.filter(tags=> tags !== tag)
        })
    }

    const handleClickDone = () => {
        setbolTexCrossed(prev => !prev)
    }
    return (
        <div>
            <div>  
                <h2 style={{ textDecoration: bolTexCrossed ? 'line-through' : 'none' }}>{name}</h2>
                <p style={{ textDecoration: bolTexCrossed ? 'line-through' : 'none' }}>{`#${tag}`}</p>
                <p style={{ textDecoration: bolTexCrossed ? 'line-through' : 'none' }}>Priority: {priority}</p>
                <p style={{ textDecoration: bolTexCrossed ? 'line-through' : 'none' }}>Finish date: {deadline}</p>
            </div>
            <div>
                <button onClick={handleClickDelete}>Delete</button>
                <button onClick={handleClickDone}>Done</button>
            </div>

        </div>
    )
}

export default ToDo