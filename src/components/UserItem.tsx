import React, { FC } from 'react';
import { Iuser } from '../types/types';
interface UserItemProps {
    user:Iuser
}
const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        
             <div
             style={{padding:'15px 15px',border:'1px solid teal'}}
             >

                 
                 
                 {user.id}. {user.name} проживает в городе {user.address.city} по улице {user.address.street}</div>

       
    );
};

export default UserItem;