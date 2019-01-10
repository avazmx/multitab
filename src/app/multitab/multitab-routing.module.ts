import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultitabComponent } from './components/multitab/multitab.component';

const routes: Routes = [
  { path: '', component: MultitabComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MultitabRoutingModule { }
