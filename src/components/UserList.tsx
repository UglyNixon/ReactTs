import React from 'react';
import { FC } from 'react';
import { Iuser } from '../types/types';
import UserItem from './UserItem';
interface UserListProps {
 users:Iuser[]
}

const UserList:FC<UserListProps> = ({users}) => {

    
    return (
        <div>
            {users.map(user=><UserItem key={user.id} user={user}/>)}
        </div>
    );
};

export default UserList;