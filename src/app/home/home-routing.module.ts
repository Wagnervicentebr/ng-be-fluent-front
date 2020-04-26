import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeRoutingComponent } from './home-routing.component';
import { HomeComponent } from './components/home.component';

export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeRoutingComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}