import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true // Adiciona hash para melhor compatibilidade com GitHub Pages
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
