import { Request, Response } from 'express';

import { movieModel } from '../models';

const deleteMovieController = async (req: Request, res: Response) =>  {
  const { id } = req.body;

  const deleteMovie = await movieModel.deleteOne({ _id: id });

  res.send(deleteMovie);
};

export default deleteMovieController;
