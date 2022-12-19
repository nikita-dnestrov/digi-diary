import { Router } from 'express';
import { validate } from '../common';
import { withToken } from '../common/jwt.middleware';
import { classController } from '../controllers';

export const classRouter = Router();

const { createClass } = classController;

classRouter.post('/', withToken, createClass);
