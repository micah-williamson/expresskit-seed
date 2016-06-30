import Route from 'expresskit/route';
import Rule from 'expresskit/rule';
import {Param, Body} from 'expresskit/property';
import Auth from 'expresskit/auth';
import Response from 'expresskit/route/response';

import {User} from './user.model.ts';
import {UserService} from './user.service.ts';

export class UserRouter {
    @Route('GET', '/user/:id')
    public static getUser(@Param('id') userId: number): Promise<User> {
        return UserService.getUser(userId);
    }

    @Route('POST', '/user')
    public static createUser(@Body(User) create: User): Promise<User> {
        return UserService.createUser(create);
    }

    @Route('PUT', '/user')
    @Rule('IsUserOwner')
    public static updateUser(@Body(User) update: User): Promise<void> {
        return UserService.updateUser(update);
    }
}