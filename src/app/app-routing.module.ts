import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfelementComponent } from './shared/afelement/afelement.component';
import { ARElementComponent } from './shared/arelement/arelement.component';

const routes: Routes = [
  {path: 'arelement', component: AfelementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
