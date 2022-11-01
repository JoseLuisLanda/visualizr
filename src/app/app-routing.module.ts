import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ARElementComponent } from './shared/arelement/arelement.component';

const routes: Routes = [
  {path: 'arelement', component: ARElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
