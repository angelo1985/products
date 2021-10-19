import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

// Componentes
import { RecetasListComponent } from './recetas-list/recetas-list.component';
import { IngredientesListComponent } from './ingredientes-list/ingredientes-list.component';
import { PagesComponent } from './pages.component';

// Routing
import { PagesRoutingModule } from "./pages-routing.module";

// Own Modules
import { SharedModule } from "../shared/shared.module";
import { IngredientesFormComponent } from './ingredientes-form/ingredientes-form.component';

@NgModule({
    declarations: [
    RecetasListComponent,
    IngredientesListComponent,
    PagesComponent,
    IngredientesFormComponent
  ],
    imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      PagesRoutingModule,
      SharedModule
    ],
    exports: [PagesComponent]

})

export class PagesModule {}