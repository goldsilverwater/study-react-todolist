import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../reduceers/todo";


const TodoInput = () => {

    const dispatch = useDispatch();

    const [ value, setValue ] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)    
    }

    const onClick = () => {
        console.log(value)
        dispatch( {type:ADD_TODO, data:value} )
    }

    const todoState = useSelector(state => state.todoState)
    useEffect(()=>{
        console.log('입력 후222:' + JSON.stringify(todoState))    
    },[todoState]);

    
    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
            <button type="button" onClick={onClick}>생성</button>
        </div>
    )
}


export default TodoInput