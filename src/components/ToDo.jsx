import React, { useState } from 'react'


function ToDo({ name, id, priority, deadline, tag, setList, setMemory}) {

    const [bolTexCrossed, setbolTexCrossed] = useState(false)
    const [stateDone, setStateDone] = useState(false)

    const handleClickDelete = () => {

        setMemory((prev) => {
            return prev.filter(taks => taks.id !== id)
        })

        setList((prev) => {
            return prev.filter(taks => taks.id !== id)
        })
        
    }

    const handleClickDone = () => {
        setStateDone(prev => !prev)
    }


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

  