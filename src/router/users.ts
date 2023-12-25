import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';
import { isAuthenticated, isQwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isQwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isQwner, updateUser)
}