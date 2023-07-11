import React from 'react'

function ToDo({id, name, priority, deadline, tag}) {

    return (
        <div>
            <div>  
                <h2>{name}</h2>
                <p>{`#${tag}`}</p>
                <p>Priority: {priority}</p>
                <p>Finish date: {deadline}</p>
                <p>{id}</p>
            </div>
            <div>
                <button>Delete</button>
                <button>Done</button>
            </div>

        </div>
    )
}

export default ToDo