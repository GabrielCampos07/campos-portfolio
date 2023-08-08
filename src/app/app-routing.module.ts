import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'choose-language'
  },
  {
    path: 'choose-language',
    loadChildren: () => import('./choose-language/choose-language.module')
    .then(m => m.ChooseLanguageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
