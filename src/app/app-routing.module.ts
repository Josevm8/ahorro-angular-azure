import { CtsComponent } from './pages/cts/cts.component';
import { AhorroComponent } from './pages/ahorro/ahorro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'ahorro', component: AhorroComponent },
  { path: 'cts', component: CtsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
