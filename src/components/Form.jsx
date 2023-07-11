import React, { useState } from 'react'
import ToDoList from './ToDoList'
import TagsMenu from './TagsMenu'
import { v4 as uuidv4 } from 'uuid';

function Form() {
    const [data, setData] = useState({})
    const [list, setList] = useState([])
    const [tag, setTag] = useState(['#all'])

    const handleChange = (event) => {
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list, { ...data, id: uuidv4() }])

        if (event.target[4].name === 'tag') {
            setTag(prev => {
                if (!prev.includes(`#${event.target[4].value}`)) {
                    return [...prev, `#${event.target[4].value}`]
                } else {
                    return [...prev]
                }
            })
        }
    }



    return (
        <>
            <div style={{ display: 'flex', gap: '20px' }} >
                <form onSubmit={handleSubmit} action="" style={{ display: 'flex', gap: '20px', width: '90%' }}>
                    <section style={{ display: 'flex', gap: '20px', flexDirection: 'column', width: '60%' }}>
                        <label htmlFor="">Insert todo: </label>
                        <input type="text" name='name' onChange={handleChange} value={data.name} />
                        <input type="submit" value='Send' />
                    </section>
                    <section style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                        <article><label htmlFor="">Priority:</label> <select name="priority" onChange={handleChange}>
                            <option value="Low" >Low</option>
                            <option value="Medium">Medium</option>
                            <option value="Hight">Hight</option>
                        </select></article>
                        <article><label htmlFor="">Deadline:</label><input type="date" name="deadline" onChange={handleChange} /></article>
                        <article><label htmlFor="">Tag:</label><input type="text" name='tag' onChange={handleChange} /></article>
                    </section>
                </form>
            </div>
            <hr />
            <div>
                {
                    tag?.map((tag) => {
                        return < TagsMenu 
                        tag={tag} 
                        setList={setList}/>
                    })
                }
            </div>
            < ToDoList
                list={list}
                setList={setList}
                sTag = {setTag} />

        </>
    )
}

export default Form