import React, { useEffect } from 'react';
import { useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, Iuser } from './types/types';
import axios from 'axios'
import List from './components/List';
import UserItem from './components/UserItem';

const App = () => {
    const [users, setUsers] = useState<Iuser[]>([]);
    const [todo, setTodo] = useState<ITodo[]>([]);

useEffect(()=>{fetchTodos()},[])
    
const fetchTodos= async()=>{
        try {
            const response =await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/users');
            setTodo(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
           <Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num)=>console.log(num)}>
               <button>кнопка</button>
           </Card>
           <List items={users} renderItem={(user)=><UserItem user={user} key={user.id}/>}/>
        </div>
    );
};

export default App;