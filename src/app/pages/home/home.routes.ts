import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutes } from '../../constants/routes.constants';
import { RootComponent } from './components/root/root.component';
import { ProgressComponent } from './components/progress/progress.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: RootComponent
            },
            {
                path: HomeRoutes.PROGRESS,
                component: ProgressComponent
            }
        ]
    },
];
