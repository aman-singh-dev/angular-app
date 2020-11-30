import { Role } from './role';

export class User {
    _id: string;
    name: string;
    email: string;
    mobile: string;
    password: string;
    created_on: Date;
    status: string;
    role: Role;
}