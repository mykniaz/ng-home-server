import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from 'ts-mongoose';
import * as bcrypt from 'bcrypt';

enum Roles {
  user = 10,
  admin = 20,
}

const userSchema = createSchema(
  {
    login: Type.string({ unique: true }),
    email: Type.string({ unique: true }),
    password: Type.string(),
    role: Type.number({ enum: Roles, default: Roles.user }),
  },
);

type TUserProps = ExtractProps<typeof userSchema>;
type TUserSchema = ExtractDoc<typeof userSchema>;
interface IUserProps extends TUserProps {
  comparePassword?: (plaintext: string, callback: any) => any;
}

userSchema.pre('save', function(this: TUserSchema, next: any) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function(plaintext: any, callback: any) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

const userModel = typedModel('user', userSchema);

export {
  userModel,
  IUserProps,
  TUserProps,
  TUserSchema,
};
