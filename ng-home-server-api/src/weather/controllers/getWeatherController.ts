import { Request, Response } from 'express';

import weather from '../../services/weather';

const getWeatherController = async (req: Request, res: Response) =>  {
  const temperature = await weather.getTemperature();
  const humidity = await weather.getHumidity();
  const pressure = await weather.getPressure();

  const weatherData = {
    temperature,
    humidity,
    pressure,
    date: new Date(),
  };

  res.send(weatherData);
};

export default getWeatherController;
