import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ONCHECKED, DELETETODO } from "../reduceers/todo";

const TodoList = () => {
     
    const dispatch = useDispatch();
    
    const onChecked = (e,id) => {
        const checked = e.target.checked;
        dispatch( {type:ONCHECKED, data:{id:id, checked:checked}} )
    }

    const deleteTodo = (id) => {
        dispatch( {type:DELETETODO, data:{id:id}} )
    }

    const todoState = useSelector(state => state.todoState)
    // useEffect(()=>{
    //     console.log('입력 후:' + JSON.stringify(todoState))    
    // },[todoState]);

    return(
        <ul>
            {
                todoState &&
                todoState.list.map((data) => (
                    <li key={'todo'+data.id}>
                        <input type="checkbox" checked={data.checked} onChange={ (e)=>onChecked(e, data.id)} />
                        <span>{data.cont}</span>
                        <button type="button" onClick={ (e)=>deleteTodo(data.id)}>삭제</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList
