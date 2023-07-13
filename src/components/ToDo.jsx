import React, { useCallback, useEffect, useState } from 'react'


function ToDo({ name, id, priority, deadline, tag, setList, sTag, memory, setMemory, setStateDone }) {

    const [bolTexCrossed, setbolTexCrossed] = useState(false)
    const [change, setChange] = useState('hola')



    const handleClickDelete = () => {
        setMemory((prev) => {
            return prev.filter(taks => taks.id !== id)
        })

        setList((prev) => {
            return prev.filter(taks => taks.id !== id)
        })
        setChange(prev => !prev)




        // sTag((prev) => {

        //     setTimeout(() => {

        //         const cant = memory.map(tags => tags.tag)
        //         console.log(cant);
        //         console.log(tag);
        //         console.log(cant.includes('hola'));
        //         console.log(cant.includes(tag));
        //         if (cant.includes(tag)) {
        //             return prev
        //             console.log('Si entra');
        //         } else {
        //             return prev.filter(tags => tags !== tag)
        //         }


        //     }, 1000)
        //     return prev.filter(tags => tags !== tag)
        // })



    }



    const handleClickDone = () => {
        setStateDone(prev => !prev)
    }

    useEffect(() => {
        console.log('hola');
        // const cant = memory.map(tags => tags.tag)
        // console.log(cant);
        
    },[])
    return (
        <div >
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