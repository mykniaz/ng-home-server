import { Request, Response } from 'express';

import { IUserProps, userModel } from '../models';

const loginUserController = async (req: Request, res: Response) =>  {
  try {
    const user: IUserProps | null = await userModel.findOne({ login: req.body.login }).exec();

    if (user && user.comparePassword) {
      user.comparePassword(req.body.password, (error: any, match: any) => {
        if (!match) {
          return res.status(400).send({ message: 'The password is invalid' });
        }
      });

      res.send({
        message: 'The username and password combination is correct!',
        user: {
          id: user._id,
          login: user.login,
          email: user.email,
          role: user.role,
        },
      });
    }

    return res.status(400).send({ message: 'The username does not exist' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default loginUserController;
