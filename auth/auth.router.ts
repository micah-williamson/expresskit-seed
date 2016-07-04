import {Route, Response, Rule, Header, Body, Auth, ResponseType} from 'expresskit';

import {AuthToken} from './authToken.model';
import {AuthService} from './auth.service';

export class AuthRouter {
    @Route('POST', '/auth')
    @ResponseType(AuthToken)
    public static login(@Header('Authorization') authHeader: string): Promise<AuthToken> {
        return AuthService.verifyAndCreateAuthToken(authHeader).then((authToken: AuthToken) => {
          return authToken || new Response(401, 'Login failed'); 
        });
    }

    @Route('DELETE', '/auth')
    public static logout(@Auth('User') authToken: AuthToken): Promise<any> {
      return AuthService.clearAuthToken(authToken);
    }
}