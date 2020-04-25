import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingComponent } from './login-routing.component';
import { LoginComponent } from './components/login.component';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LoginRoutingComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}