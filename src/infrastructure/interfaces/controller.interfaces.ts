import { User } from "@base/api/models/Users/User";

export class LoggedUser {
  userId: number;
  email: string;
  role: string;
}

export class AuthRequest extends Request {
  loggedUser: LoggedUser;
}
