import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "../store/api/todosApi"

export const TodoApp = () => {

  const [count, setCount] = useState(1)


/* const {data: todos, isLoading} = useGetTodosQuery() */
const {data: todo, isLoading} = useGetTodoQuery(count)

console.log(todo)

const nextTodo = (count) =>{
  count === 200 ? setCount(1) : setCount(count+1)
}

const prevTodo = (count) =>{
  count === 1 ? setCount(200) : setCount(count-1)
}

  return (
    <>
    <h1>Todo - RTK Queryt</h1>
    <hr />
    <h4>isLoading: {isLoading ? 'True':'False'} </h4>
    <pre> {JSON.stringify(todo)} </pre>
    <button
    onClick={()=>{prevTodo(count)}}
    >
        Prev todo
    </button>

    <button
    onClick={()=>{nextTodo(count)}}
    >
        Next todo
    </button>
    </>
  )
}
