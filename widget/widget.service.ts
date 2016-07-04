import {Auth, AuthHandler, RuleHandler, Param} from 'expresskit';

import {Widget} from './widget.model';
import {AuthToken} from '../auth/authToken.model';

export class WidgetService {

  /**
   * Gets the widget from the database given the id. If no widget is found
   * by the given id, NULL is returned.
   */
  public static getWidget(widgetId: number): Promise<Widget> {
    return new Promise((resolve, reject) => {

      // Using timeout to simulate db call
      setTimeout(() => {
        let widget = new Widget();
        
        widget.id = widgetId;
        widget.name = 'ACME Widget';
        widget.description = 'ACME Widget is a great widget';
        widget.price = 10.99;

        // Once db query returns a widget, resolve it
        resolve(widget);

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
   * Takes a widget and creates an entry in the db. Returns the newly created widget
   * with the db id.
   */
  public static createWidget(userId: number, create: Widget): Promise<Widget> {
    return new Promise((resolve, reject) => {

      // Using timeout to simulate db call
      setTimeout(() => {
        let widget = new Widget();
        
        widget.id = 2;
        widget.name = create.name;
        widget.description = create.description;
        widget.price = create.price;

        // Once db query returns a widget, resolve it
        resolve(widget);

        /**
         * Error:
         * 
         * reject(errorMessage);
         */
      }, 10);

    });
  }

  /**
   * Update widget takes a widget object with an id and updates the coresponding widget
   * in the database. Be sure to validate widget ownership before running this method.
   */
  public static updateWidget(update: Widget): Promise<any> {
     return new Promise((resolve, reject) => {

      // Using timeout to simulate db call
      setTimeout(() => {

        // Once db query returns a widget, resolve it
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
   * Deletes the widget (and it's references) with the given widgetId.
   * Be sure to validate widget ownership before running this method.
   */
  public static deleteWidget(widgetId: number): Promise<any> {
     return new Promise((resolve, reject) => {

      // Using timeout to simulate db call
      setTimeout(() => {

        // Once db query returns a widget, resolve it
        resolve();

        /**
         * Error:
         * 
         * reject(errorMessage);
         */
        
      }, 10);

    });
  }

  @RuleHandler('IsWidgetOwner')
  public static isOwner(@Auth() authToken: AuthToken, @Param('id') widgetId: number): Promise<any> {
    return new Promise((resolve, reject) => {
    
      // Using timeout to simulate db call
      setTimeout(() => {

        // Once db query returns a widget, resolve it
        resolve();

        /**
         * Not Owner:
         * 
         * resolve(new Response(403, 'This is not your widget.'));
         * 
         * Error:
         * 
         * reject(errorMessage);
         */
      
      }, 10);

    });
  }
  
}