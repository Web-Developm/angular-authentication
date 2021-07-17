import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './core/auth/auth-guard.guard';
import { ExpenseComponent } from './expense/expense.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'logout', component: LogoutComponent
  },

  {
    path: 'expense', component: ExpenseComponent, canActivate: [AuthGuardGuard]
  },

  {
    path: '', component: AppComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
