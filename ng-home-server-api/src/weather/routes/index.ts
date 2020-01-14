import { Router } from 'express';

import { getWeatherController } from '../controllers';

const weatherRouter = Router();

weatherRouter.get('/', getWeatherController);

export { weatherRouter };
