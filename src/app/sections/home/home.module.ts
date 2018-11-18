// Base imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material-module';
import { CommonModule } from '@angular/common';

// Page specific imports
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RootComponent } from './pages/root/root.component';

@NgModule({
    declarations: [
        HomeComponent,
        ProgressComponent,
        RootComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(homeRoutes),
    ]
})
export class HomeModule {
}
