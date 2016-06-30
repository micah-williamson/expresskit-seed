import AuthHandler from 'expresskit/auth/handler';
import Response from 'expresskit/route/response';
import {Header} from 'expresskit/property';

import {AuthToken} from './authToken.model.ts';

export class AuthService {

  /**
   * Verifies the authHeader (assumed basic auth).
   * Resolves an auth token if the login is correct or NULL if the login is incorrect.
   */
  public static verifyAndCreateAuthToken(authHeader: string): Promise<AuthToken> {
    return new Promise((resolve, reject) => {

          // Using timeout to simulate db call
          setTimeout(() => {
              let authToken = new AuthToken();
              
              authToken.userId = 1;
              authToken.token = 'highlyrandomstring';
              authToken.created = new Date();

              // 3 hours till expiration
              authToken.expires = new Date(authToken.created.getTime() + (60 * 60 * 3 * 1000));

              // Once db query returns a user, resolve it
              resolve(authToken);

              /**
               * Invalid login:
               * 
               * resolve(null);
               * 
               * Error:
               * 
               * reject(errorMessage);
               */
          }, 10);

      });
  }

  /**
   * Clears auth for the given token. The AuthToken will no longer be resolved by @Auth()
   */
  public static clearAuthToken(authToken: AuthToken): Promise<void> {

    return new Promise((resolve, reject) => {

          // Using timeout to simulate db call
          setTimeout(() => {

              resolve();

              /**
               * Error:
               * 
               * reject(errorMessage);
               */
          }, 10);

      });

  }

  /**
   * Returns the auth token connected to the auth header credientials.
   */
  public static getAuthToken(authHeader: string): Promise<AuthToken> {
    return new Promise((resolve, reject) => {

      // Using timeout to simulate db call
      setTimeout(() => {
          let authToken = new AuthToken();
          
          authToken.userId = 1;
          authToken.token = 'highlyrandomstring';
          authToken.created = new Date();

          // 3 hours till expiration
          authToken.expires = new Date(authToken.created.getTime() + (60 * 60 * 3 * 1000));

          // Once db query returns a user, resolve it
          resolve(authToken);

          /**
           * Invalid login:
           * 
           * resolve(null);
           * 
           * Error:
           * 
           * reject(errorMessage);
           */
      }, 10);

    });
  }


  // TRUE = default auth
  @AuthHandler('User', true)
  public static resolveAuth(@Header('Authorization') authHeader: string): Promise<AuthToken> {
    return this.getAuthToken(authHeader).then((authToken: AuthToken) => {
      return authToken || new Response(401, 'Invalid Auth Token');
    });
  }
}