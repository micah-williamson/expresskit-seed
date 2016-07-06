import {Route, Response, Rule, Param, Body, ResponseType} from 'expresskit';

import {User} from './user.model';
import {UserService} from './user.service';

export class UserRouter {
    @Route('GET', '/user/:id')
    @ResponseType(User)
    public static getUser(@Param('id') userId: number): Promise<User> {
        return UserService.getUser(userId);
    }

    @Route('POST', '/user')
    @ResponseType(User)
    public static createUser(@Body(User) create: User): Promise<User> {
        return UserService.createUser(create);
    }

    @Route('PUT', '/user')
    @Rule('IsUserOwner')
    public static updateUser(@Body(User) update: User): Promise<any> {
        return UserService.updateUser(update);
    }
}