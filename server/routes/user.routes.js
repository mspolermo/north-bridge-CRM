import express from 'express';
import simulateDelay from '../functions/simulateDelay.js';
import UserController from '../controller/user.controller.js';

const router = express.Router();

router.post('/users/login', simulateDelay, UserController.login);
router.post('/users', simulateDelay, UserController.createUser);

router.get('/users', simulateDelay, UserController.getUsers);
router.get('/users/:id', simulateDelay, UserController.getOneUser);
router.put('/users', simulateDelay, UserController.updateUser);
router.delete('/users/:id', simulateDelay, UserController.deleteUser);

export default router;