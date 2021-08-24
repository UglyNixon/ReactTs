import React, { FC } from 'react';
import { Iuser } from '../types/types';
interface UserItemProps {
    user:Iuser,
    onClick:(user:Iuser)=>void
}
const UserItem:FC<UserItemProps> = ({user,onClick}) => {
    return (
        
             <div
             style={{padding:'15px 15px',border:'1px solid teal'}}
             onClick={()=>onClick(user)}
             >

                 
                 
                 {user.id}. {user.name} проживает в городе {user.address.city} по улице {user.address.street}</div>

       
    );
};

export default UserItem;