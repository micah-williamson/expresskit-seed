import Route from 'expresskit/route';
import Rule from 'expresskit/rule';
import {Param, Body} from 'expresskit/property';
import Auth from 'expresskit/auth';
import Response from 'expresskit/route/response';

import {AuthToken} from '../auth/authToken.model';
import {Widget} from './widget.model.ts';
import {WidgetService} from './widget.service.ts';

export class WidgetRouter {
    @Route('GET', '/widget/:id')
    public static getWidget(@Param('id') widgetId: number): Promise<Widget> {
        return WidgetService.getWidget(widgetId).then((widget) => {
            return widget || new Response(404, `Widget doesn't exist`);
        });
    }

    @Route('POST', '/widget')
    public static createWidget(@Auth() authToken: AuthToken, @Body(Widget) create: Widget): Promise<Widget> {
        return WidgetService.createWidget(authToken.userId, create);
    }
    
    @Route('PUT', '/widget')
    @Rule(WidgetService.isOwner)
    public static updateWidget(@Body(Widget) update: Widget): Promise<void> {
        return WidgetService.updateWidget(update);
    }

    @Route('DELETE', '/widget/:id')
    @Rule(WidgetService.isOwner)
    public static deleteWidget(@Param('id') widgetId: number): Promise<void> {
        return WidgetService.deleteWidget(widgetId);
    }
}