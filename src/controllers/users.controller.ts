// import type { request, response } from 'express';
// import { getUserService } from '../services/user.service.js';

// export const getUserController = async (req: Request, res: Response) => {
//     const users = await getUserService(req.params.id);

//     res.status(200).json({
//         success: true,
//         message: "user found successfully ",
//         data: users
//     })
// }

import type {Request, Response } from "express";
import { getUserService } from "../services/users.service.js";

export const getUsersController = (_req: Request, res: Response) => {
  const users = getUserService();
  res.status(200).json({
    success: true,
    message: "Users retrieved successfully",
    data: users,
  });
};