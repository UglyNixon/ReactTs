import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage:FC = () => {
    
    const [todo, setTodo] = useState<ITodo[]>([]);

    useEffect(()=>{
        fetchTodos();
      
       
    
    },[])
        
    const fetchTodos= async()=>{
            try {
                const response =await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit');
                setTodo(response.data)
            } catch (error) {
                alert(error)
            }
        }
    return (
        <List items={todo} renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>
    );
};

export default TodosPage;