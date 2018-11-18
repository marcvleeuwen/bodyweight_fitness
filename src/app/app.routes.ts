import {Routes} from '@angular/router';
import {AppRoutes} from './constants/routes.constants';
import {HomeComponent} from './sections/home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: AppRoutes.HOME,
        pathMatch: 'full'
    },
    {
        path: AppRoutes.HOME,
        component: HomeComponent
    }
];
