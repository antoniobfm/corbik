import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import { AppError } from '@shared/errors/AppError';
import CORS_OPTIONS from '@config/cors';

import routes from './routes';

import '@shared/container';

const app = express();

app.enable('trust proxy');
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

app.use(cors(CORS_OPTIONS));
app.use(routes);

// app.use(errors());

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				message: err.message,
			});
		}

		return response.status(500).json({
			status: 'error',
			message: `Internal server error - ${err.message}`,
		});
	},
);

export { app };
