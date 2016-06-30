import {User} from './user.model';

export class UserService {

    /**
     * Gets the user from the database given the id. If no user is found
     * by the given id, NULL is returned.
     */
    public static getUser(userId: number): Promise<user> {
        return new Promise((resolve, reject) => {

            // Using timeout to simulate db call
            setTimeout(() => {
                let user = new User();
                
                user.id = userId;
                user.email = 'foo@bar.baz';
                user.password = 'securepasswordthatisencrypted';

                // Once db query returns a user, resolve it
                resolve(user);

                /**
                 * Not found:
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
     * Takes a user and creates an entry in the db. Returns the newly created user
     * with the db id.
     */
    public static createUser(create: User): Promise<User> {
        return new Promise((resolve, reject) => {

            // Using timeout to simulate db call
            setTimeout(() => {
                let user = new User();
                
                user.id = 2;
                user.email = create.email;
                user.password = create.password;

                // Once db query returns a user, resolve it
                resolve(user);

                /**
                 * Error:
                 * 
                 * reject(errorMessage);
                 */
            }, 10);

        });
    }

    /**
     * Update user takes a user object with an id and updates the coresponding user
     * in the database. Be sure to validate user ownership before running this method.
     */
    public static updateUser(update: User): Promise<void> {
         return new Promise((resolve, reject) => {

            // Using timeout to simulate db call
            setTimeout(() => {

                // Once db query returns a user, resolve it
                resolve();

                /**
                 * Error:
                 * 
                 * reject(errorMessage);
                 */
                
            }, 10);

        });
    }
    
}