import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList'
import TagsMenu from './TagsMenu'
import { v4 as uuidv4 } from 'uuid';

function Form() {
    const [data, setData] = useState({})
    const [list, setList] = useState([])
    const [tag, setTag] = useState(['all'])
    const [memory, setMemory] = useState([])
    const [change, setChange] = useState(0)

    const cant = memory.map(tags => tags.tag)
   

    const deleteRepeated =(array) => {
        return array.filter((elemento, indice) => {
          return array.indexOf(elemento) === indice;
        });
        
      }
      
      useEffect(()=> {
        console.log(cant.length);
        if (cant.length === 0) {
            console.log('hola');
            setTag(['all'])
        } else {
            setTag(deleteRepeated(cant))
        }
       
      },[memory])

    const handleChange = (event) => {
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const handleSubmit = (event) => {
        let genId = uuidv4()
        event.preventDefault();

        setList([...list, { ...data, id: genId }])

        if (event.target[4].name === 'tag') {
            setTag(prev => {
                if (!prev.includes(`${event.target[4].value}`)) {
                    return [...prev, `${event.target[4].value}`]
                } else {
                    return [...prev]
                }
            })
        }
      setMemory([...memory, { ...data, id: genId }])
    }
     useEffect(()=>{
        
     },[])



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
                        setList={setList}
                        memory={memory}
                        />
                    })
                }
            </div>
            < ToDoList
                list={list}
                setList={setList}
                sTag = {setTag}
                memory={memory}
                setMemory ={setMemory}
                // setStateDone = {setStateDone}
                setChange = {setChange}
                change = {change}
                cant = {cant}
                />

        </>
    )
}

export default Form