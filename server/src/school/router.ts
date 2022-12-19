import { Router } from 'express';
import { validate } from '../common';
import { withToken } from '../common/jwt.middleware';
import { schoolController } from './controller';

export const schoolRouter = Router();

const { createSchool, getSchool, getSchoolsByOwner, deleteSchool } =
	schoolController;

schoolRouter.post('/', withToken, createSchool);
schoolRouter.get('/:id', withToken, getSchool);
schoolRouter.delete('/:id', withToken, deleteSchool);
schoolRouter.get('/', withToken, getSchoolsByOwner);
