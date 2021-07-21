import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
 { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
 { path: 'profesional', loadChildren: () => import('./pages/profesional/profesional.module').then(m => m.ProfesionalModule) }, 
 { path: 'paciente', loadChildren: () => import('./pages/paciente/paciente.module').then(m => m.PacienteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
