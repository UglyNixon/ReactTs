import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Iuser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

const UserPage :FC = () => {
    const history=useHistory()
    const [users, setUsers] = useState<Iuser[]>([]);
    useEffect(()=>{
       
        fetchUsers()
       
    
    },[])
    const fetchUsers= async()=>{
        try {
            const response =await axios.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
       
            <List items={users} renderItem={(user:Iuser)=>
            <UserItem 
            onClick={(user)=>history.push('/users/'+user.id)} 
            user={user} 
            key={user.id}/>}/>
       
    );
};

export default UserPage;