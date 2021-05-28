import React, { createContext, useContext, useReducer, useRef } from 'react'

const initialTodos = [
    {
        id:1,
        text: 'React',
        done: true
    },
    {
        id:2,
        text: 'Docker',
        done: true
    },
    {
        id:3,
        text: 'Spring Boot',
        done: false
    },
    {
        id:4,
        text: 'Linux',
        done: false
    }
]

function todoReducer(state, action){
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map((todo)=>(
                todo.id != action.id? {...todo, done: !todo.done }: todo
            ))
        case "REMOVE":
            return state.filter((todo)=>(todo.id != action.id))
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value = {state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext value = {nextId}>
                    {children}
                </TodoNextIdContext>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}
export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}

export function useTodoState() {
    return useContext(TodoStateContext);
  }

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}