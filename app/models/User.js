import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: (pass) => {
      if (!pass?.length || pass.length < 5) {
        new Error('password must be more then 5 symbols');
      }
    },
  },
}, {timestamps: true})

UserSchema.post('validate', (user) => {
  const pass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(pass, salt);
});

export const User = models?.User || model('User', UserSchema);
