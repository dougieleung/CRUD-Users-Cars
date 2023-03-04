export interface UserArgs {
  name: string;
  username: string;
  password: string;
}

export interface PasswordArgs {
  username: string;
  oldPassword: string;
  newPassword: string;
}

export interface CarArgs {
    make: string;
    model: string;
    year: number;
    price: number;
    userId: string;
  }
