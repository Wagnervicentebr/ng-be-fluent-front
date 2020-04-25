import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroRoutingComponent } from './cadastro-routing.component';
import { CadastroComponent } from './components/cadastro.component';

export const CadastroRoutes: Routes = [
    {
        path: 'cadastro',
        component: CadastroRoutingComponent,
        children: [
            {
                path: '',
                component: CadastroComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(CadastroRoutes)],
    exports: [RouterModule]
})

export class CadastroRoutingModule {}