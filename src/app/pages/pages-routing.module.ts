import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientesListComponent } from './ingredientes-list/ingredientes-list.component';
import { PagesComponent } from './pages.component';
import { RecetasListComponent } from './recetas-list/recetas-list.component';

const pagesRoutes: Routes = [
  { path: "", component: PagesComponent,
    children: [
        { path: 'recetas-list', component: RecetasListComponent },
        { path: 'ingredientes-list', component: IngredientesListComponent },
        { path: "", redirectTo: "/recetas-list", pathMatch: "full"},
    ]
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(pagesRoutes)],
//   exports: [RouterModule]
// })
// export class PagesRoutingModule { }

export const PagesRoutingModule = RouterModule.forChild(pagesRoutes);