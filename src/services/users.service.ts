import type { request, response } from 'express';
import { findAllUsers } from '../repositories/users.repository.js';


export const getUserService = () =>{
 const users = findAllUsers();
return users;
}
