import { handleActions } from "redux-actions";

export const ONCHECKED = "ONCHECKED"
export const DELETETODO = 'DELETETODO'
export const ADD_TODO = 'ADD_TODO'


const todoState = {
    list: [
        {
            id: 1,
            cont: '내용1',
            checked: false
        },
        {
            id: 2,
            cont: '내용2',
            checked: false
        },
        {
            id: 3,
            cont: '내용3',
            checked: false
        }

    ]
}

export default handleActions({
    [ONCHECKED]: (state, action) => ({
        ...state,
        list:state.list.map(
            (todo) =>
            todo.id === action.data.id ? { ...todo, checked:action.data.checked  } : todo
        )
    }),

    [DELETETODO]: (state, action) => ({
        ...state,
        list:state.list.filter(
            (todo) =>
            todo.id !== action.data.id
        )
    }), 

    [ADD_TODO]: (state, action) => {
        return {
          ...state,
          list:state.list.concat({
            id: state.list.length+1,
            cont:  action.data,
            checked: false
            })
        };
     }
   
}, todoState);