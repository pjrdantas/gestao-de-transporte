import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CondutoresComponent } from './condutores/condutores.component';
import { EmailDanfeComponent } from './email-danfe/email-danfe.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  { path: 'condutores', component: CondutoresComponent },
  { path: 'emailDanfe', component: EmailDanfeComponent },
  { path: 'veiculos', component: VeiculosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
