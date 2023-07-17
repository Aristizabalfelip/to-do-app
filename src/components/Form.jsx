import React, { useEffect, useState } from 'react'
import arrow from '../assets/arrow.png'
import ToDoList from './ToDoList'
import TagsMenu from './TagsMenu'
import { v4 as uuidv4 } from 'uuid';

function Form() {
    const [data, setData] = useState({})
    const [list, setList] = useState([])
    const [tag, setTag] = useState(['all'])
    const [memory, setMemory] = useState([])
    const [change, setChange] = useState(0)

    const deleteRepeated = (array) => {
        return array.filter((element, index) => {
            return array.indexOf(element) === index;
        });

    }

    useEffect(() => {
        setTag(prev => {
            const arrayTags = memory.map(todo => todo.tag)
            return ['all', ...deleteRepeated(arrayTags)]
        })

    }, [memory])

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

        setList([...list, { ...data, id: genId, done: false }])

        setTag(prev => {
            if (!prev.includes(`${event.target.tag.value}`)) {
                return [...prev, `${event.target.tag.value}`]
            } else {
                return [...prev]
            }
        })

        setMemory([...memory, { ...data, id: genId, done: false }])
    }

    window.addEventListener('scroll', function () {
        const animationEti = document.querySelector('#animado');
        const position1 = animationEti.getBoundingClientRect().top/2;
        const sizePant = window.innerHeight;
        if (position1 < sizePant) {
            animationEti.style.animation = 'mover 2s ease-out'
        }

    })













    return (
        <>
            <div class='bgImg flex justify-center'>
                <div  className='flex justify-center w-4/5 h-14 mt-60 p-10 bg-white bg-opacity-80 items-center triangle-border'>
                    <h1 className='flex justify-center font-sans text-4xl font-extrabold'>MemoMind</h1>
                    
                </div>

            </div>
            <div className="flex flex-col justify-center mt-10 items-center gap-5">
                <p className='p-10 rounded-lg bg-black bg-opacity-10 p-4'>Te ayudamos a organizar la distribución de tu tiempo para que  siempre estés al día</p>
                <img className='arrow' src={arrow} alt="" />
            </div>

            <div className="flex gap-20 justify-center" id='animado'>
                <form className='flex  justify-center border-2 border-brown-500 ... p-10 bg-neutral-500' onSubmit={handleSubmit} action="" style={{ display: 'flex', gap: '70px', width: '90%' }}>
                    <section style={{ display: 'flex', gap: '20px', flexDirection: 'column', width: '60%' }}>
                        <label htmlFor="">Insert todo: </label>
                        <input className='border-2 border-brown-500 ... rounded-lg' type="text" name='name' onChange={handleChange} value={data.name} />
                        <input className='rounded-lg bg-black bg-opacity-10 w-16 p-2' type="submit" value='Send' />
                    </section>
                    <section style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                        <article><label htmlFor="">Priority:</label> <select className= 'border-2 border-brown-500 ... p-1 rounded-lg' name="priority" onChange={handleChange}>
                            <option value="Low" >Low</option>
                            <option value="Medium">Medium</option>
                            <option value="Hight">Hight</option>
                        </select></article>
                        <article className='flex gap-3'><label htmlFor="">Deadline:</label><input className='border-2 border-brown-500 ... p-1 rounded-lg' type="date" name="deadline" onChange={handleChange} /></article>
                        <article className='flex gap-3'><label htmlFor="">Tag:</label><input className= 'border-2 border-brown-500 ... p-1 rounded-lg'type="text" name='tag' onChange={handleChange} /></article>
                    </section>
                </form> 
            </div>
            <hr />
            <div className='flex gap-5 justify-center'>
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
                sTag={setTag}
                memory={memory}
                setMemory={setMemory}
                setChange={setChange}
                change={change}
            />

        </>
    )
}

export default Form