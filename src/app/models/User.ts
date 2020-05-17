export class User{
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street: string,
    city: string,
    state: string,
  };
  isActive?: boolean;
  registered?: any;
}
