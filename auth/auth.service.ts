import {Resolver, Response, Header} from 'expresskit';

import {AuthToken} from './authToken.model';

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
  public static clearAuthToken(authToken: AuthToken): Promise<any> {

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

  @Resolver('Auth')
  public static resolveAuth(@Header('Authorization') authHeader: string): Promise<AuthToken> {
    return this.getAuthToken(authHeader).then((authToken: AuthToken) => {
      return authToken || new Response(401, 'Invalid Auth Token');
    });
  }
}