import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from 'ts-mongoose';
import {Types} from 'mongoose';

const movieSchema = createSchema({
  name: Type.string(),
  type: Type.string(),
});

type TMovieSchema = ExtractDoc<typeof movieSchema>;
interface IMovieProps extends ExtractProps<typeof movieSchema> {
  _id: Types.ObjectId;
}

const movieModel = typedModel('movie', movieSchema);

export {
  movieModel,
  IMovieProps,
  TMovieSchema,
};
