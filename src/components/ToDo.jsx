import React, { useCallback, useEffect, useRef, useState } from 'react'
import DeleteTag from './DeleteTag'

function ToDo({ name, id, priority, deadline, tag, setList, sTag, memory, setMemory,
    setChange, change,cant,setSelectTag}) {

    const [bolTexCrossed, setbolTexCrossed] = useState(false)
    const [stateDone, setStateDone] = useState(false)

    const handleClickDelete = () => {

        setMemory((prev) => {
            return prev.filter(taks => taks.id !== id)
        })

        setList((prev) => {
            return prev.filter(taks => taks.id !== id)
        })
        // setChange(prev => prev += 1)

        setSelectTag(tag)
    }




    const handleClickDone = () => {
        setStateDone(prev => !prev)
    }


    useEffect(() => {
       


        if (0) {
            sTag((prev) => {
                const cant = memory.map(tags => tags.tag)
            
                if (!cant.includes(tag)) {
                    return prev.filter(tags => tags !== tag)
                } else {
                    return prev
                }
            })
        }
     
           }, [change])









    // if (cant.includes(tag)) {
    //     console.log('si entra');
    //     return prev

    // } else {
    //     return prev.filter(tags => tags !== tag)
    // }














    const colorPriority = (color) => {
        if (color === 'color') {


            if (priority === 'Low') {
                return '#779ecb'
            } if (priority === 'Medium') {
                return '#fdfd96'
            } else {
                return '#de4c8a'
            }
        } else {
            if (priority === 'Low') {
                return '😴'
            } if (priority === 'Medium') {
                return '🤔'
            } else {
                return '😱'
            }
        }

    }


    return (
        <div style={{ backgroundColor: colorPriority('color') }}>
            <div>
                <h2 style={{ textDecoration: bolTexCrossed ? 'line-through' : 'none', display: 'flex', alignItems: 'center' }}>{name} <p>{colorPriority('emoji')}</p> </h2>
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