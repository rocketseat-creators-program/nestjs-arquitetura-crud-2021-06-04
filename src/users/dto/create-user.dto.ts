import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  email: string;
  name: string;
}
