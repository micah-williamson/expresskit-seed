import Route from 'expresskit/route';
import Rule from 'expresskit/rule';
import {Header, Body} from 'expresskit/property';
import Auth from 'expresskit/auth';
import Response from 'expresskit/route/response';

import {AuthToken} from './authToken.model.ts';
import {AuthService} from './auth.service.ts';

export class AuthRouter {
    @Route('POST', '/auth')
    public static login(@Header('Authorization') authHeader: string): Promise<AuthToken> {
        return AuthService.verifyAndCreateAuthToken(authHeader).then((authToken: AuthToken) => {
          return authToken || new Response(401, 'Login failed'); 
        });
    }

    @Route('DELETE', '/auth')
    public static logout(@Auth() authToken: AuthToken): Promise<void> {
      return AuthService.clearAuthToken(authToken);
    }
}