import {Auth} from 'expresskit/auth';
import {Param} from 'expresskit/property';
import {RuleHandler} from 'expresskit/rule';

export class WidgetRulesService {

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