import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Iuser } from '../types/types';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
interface userItemPageParams {
    id:string,
}
const UserItemsPage:FC = () => {
    const [user, setUser] = useState<Iuser| null>(null);
    const params=useParams<userItemPageParams>()
    const history=useHistory()
    console.log(params)
   
    useEffect(()=>{
       
        fetchUser()
       
    
    },[])
    const fetchUser= async()=>{
        try {
            const response =await axios.get<Iuser>('https://jsonplaceholder.typicode.com/users/'+params.id);
            setUser(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <button onClick={()=>history.push('/users')}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.street} {user?.address.city} 
            </div>
        </div>
    );
};

export default UserItemsPage;