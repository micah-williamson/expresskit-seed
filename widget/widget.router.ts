import {Route, Response, Rule, Param, Body, Auth, ResponseType} from 'expresskit';

import {AuthToken} from '../auth/authToken.model';
import {Widget} from './widget.model';
import {WidgetService} from './widget.service';

export class WidgetRouter {
    @Route('GET', '/widget/:id')
    @ResponseType(Widget)
    public static getWidget(@Param('id') widgetId: number): Promise<Widget> {
        return WidgetService.getWidget(widgetId).then((widget) => {
            return widget || new Response(404, `Widget doesn't exist`);
        });
    }

    @Route('POST', '/widget')
    @ResponseType(Widget)
    public static createWidget(@Auth() authToken: AuthToken, @Body(Widget) create: Widget): Promise<Widget> {
        return WidgetService.createWidget(authToken.userId, create);
    }
    
    @Route('PUT', '/widget')
    @Rule('IsWidgetOwner')
    public static updateWidget(@Body(Widget) update: Widget): Promise<void> {
        return WidgetService.updateWidget(update);
    }

    @Route('DELETE', '/widget/:id')
    @Rule('IsWidgetOwner')
    public static deleteWidget(@Param('id') widgetId: number): Promise<void> {
        return WidgetService.deleteWidget(widgetId);
    }
}